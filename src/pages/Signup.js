import React, {useEffect, useState} from 'react';
import '../App.css';

import userAPI from '../api/user.api';


import {Button, Navbar, Nav, Form, FormControl, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
   
const Signup = ({ match }) =>{
  //đang lỗi input nhá!
  const [input, setInput] = useState({email: '', pass: '', name:''})

  const handleChange1 = e => {
    setInput({email: e.target.value});
    console.log(input);
  };

  const handleChange2 = e => {
    setInput({name: e.target.value});
    console.log(input);
  };  
  
  const handleChange3 = e => {
    setInput({pass: e.target.value});
    console.log(input);
  };  

  const addUser = async () => {
    // nhớ chỉnh về author ID khi làm login
    // const data = {name: txt, authorId: authorId};
    const res = await userAPI.add(input);
  };

  return(
    <>
      <Container fluid>
        <Row>
          <Col md={3} lg={4}></Col>
          <Col md={6} lg={4}>
            <Container style={{ backgroundColor: "white", padding: "2rem 2rem"}}>
              <h3>Sign up</h3>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control value={input.email} onChange={handleChange1} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control value={input.name} onChange={handleChange2} type="text" placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control value={input.pass} onChange={handleChange3} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Retype Password" />
                  {/* <Form.Control value={input.repass} onChange={handleChange}  type="password" placeholder="Retype Password" /> */}
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button onClick={() => addUser()} variant="primary" type="submit" style={{ width: "100%" }}>
                  Create
                </Button>
              </Form>
              <br/>
            </Container>
          </Col>
          <Col md={3} lg={4}></Col>
        </Row>
      </Container>
    </>
  )
}
export default Signup