import React, {useEffect, useState, useContext} from 'react';
import '../App.css';
import axios from 'axios';
import userAPI from '../api/user.api';

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
      localStorage.setItem('user', res.user._id);
      // alert(JSON.stringify(res) + '  Bạn đã đăng nhập thành công!');
      setIslogin(true);
    }
  };
  
  let currUser = localStorage.getItem("user");
  // console.log(user)
  // if(islogin) return <Redirect to="/dashboard/5fa2646d31a53d1db0363c51"/>
  if(islogin) return <Redirect to={"/dashboard/" + currUser} />

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
                <Button onClick={() => login()} variant="primary" type="submit" style={{ width: "100%" }}>
                  Login
                </Button>
                {/* </Link> */}
              </Form>
              <Button variant="danger" type="submit" style={{ width: "100%", margin: "1rem 0rem" }}>
                  Google Login
              </Button>
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