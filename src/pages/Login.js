import React, {useEffect, useState, useContext} from 'react';
import '../App.css';
import axios from 'axios';
import userAPI from '../api/user.api';
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

import {Button, Navbar, Nav, Form, FormControl, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import UserContext from ".././context/UserContext";
   
const Login = (props) =>{
  const [input, setInput] = useState({username: '', password: ''}) 
  // const [islogin, setIslogin]  = useState(false);
  const { islogin, setIslogin } = useContext(UserContext);

  const handleChange = e => { 
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    // console.log(input);
  };

  const login = async () => {
    const res = await userAPI.login(input);
    if(res){
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('googleAuth', '');
      localStorage.setItem('fbAuth', '');
      localStorage.setItem('user', res.user._id);
      //alert(JSON.stringify(res) + '  Bạn đã đăng nhập thành công!');
      setIslogin(true);
    }
      //alert(JSON.stringify(res) + '  Bạn đã đăng nhập thất bại!');

  };
  
  let currUser = localStorage.getItem("user");
  // console.log(user)
  // if(islogin) return <Redirect to="/dashboard/5fa2646d31a53d1db0363c51"/>
  if(islogin) return <Redirect to={"/dashboard/" + currUser} />

  const responseGoogle = (res) => {
    localStorage.setItem('googleAuth', JSON.stringify(res));
    localStorage.setItem('token', res.accessToken);
    localStorage.setItem('username', res.profileObj.name);
    localStorage.setItem('user', '5fa15c4793acfa3a649e1a13');
    setIslogin(true);
  }

  const responseFacebook = (res) => {
    localStorage.setItem('fbAuth', JSON.stringify(res));
    localStorage.setItem('token', res.accessToken);
    localStorage.setItem('username', res.name);
    localStorage.setItem('user', '5fa15ced38a07a197c6bcc63');
    // console.log(res);
    setIslogin(true);
  }

  return(
    <>
      <Container fluid>
        <Row>
          <Col md={3} lg={4}></Col>
          <Col md={6} lg={4} >
            <Container style={{ backgroundColor: "white", padding: "2rem 2rem"}}>
              <h3>Login</h3>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control 
                    onChange={handleChange}
                    type="email" 
                    placeholder="Enter your email" 
                    name="username"
                    value={input.username}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control 
                    onChange={handleChange}
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={input.password}
                  />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                {/* <Link to="/dashboard/5fa2646d31a53d1db0363c51"> */}
                <Button onClick={() => login()} variant="primary" style={{ width: "100%" }}>
                  Login
                </Button>
                {/* </Link> */}
              </Form>
              {/* <Button variant="danger" type="submit" style={{ width: "100%", margin: "1rem 0rem" }}>
                  Google Login
              </Button> */}
              <hr/>
              <Container fluid>
                <Row>
                  <Col>
                    <GoogleLogin
                      clientId="548746420425-hveb451qafosuihn2qk0pupe7alsdl2q.apps.googleusercontent.com"
                      buttonText="Google Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </Col>
                  <Col>
                    <FacebookLogin
                      appId="1006134179884069"
                      autoLoad={true}
                      fields="name,email,picture"
                      callback={responseFacebook} 
                    />
                  </Col>
                </Row>
              </Container>
              <Link to="/signup" style={{ float: "right" }} >Or Register</Link>
            </Container>
          </Col>
          <Col md={3} lg={4}></Col>
        </Row>
      </Container>
    </>
  )
}
export default Login