import React, {useEffect, useState} from 'react';
import '../App.css';

import userAPI from '../api/user.api';


import {Button, Navbar, InputGroup, Nav, Form, FormControl, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
   
const Signup = ({ match }) => {
  const [input, setInput] = useState({email: '', pass: '', fullname:''}) 

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    // console.log(input);
  };

  const addUser = async () => {
    // await console.log(input)
    await userAPI.add(input);
    alert('Bạn đã tạo tài khoản thành công!');
  };

  return(
    <>
      <Container fluid>
        <Row>
          <Col md={3} lg={4}></Col>
          <Col md={6} lg={4}>
            <Container style={{ backgroundColor: "white", padding: "2rem 2rem"}}>
              <h3>Sign up</h3>
              <Container >
                <Row >
                  <InputGroup className="mb-3">
                    <FormControl
                      onChange={handleChange}
                      placeholder="Enter your email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                      name="email"
                      value={input.email}
                    />
                  </InputGroup>
                </Row>
                <Row >
                  <InputGroup className="mb-3">
                    <FormControl
                      onChange={handleChange}
                      placeholder="Enter your fullname"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      name="fullname"
                      value={input.fullname}
                    />
                  </InputGroup>
                </Row>
                <Row >
                  <InputGroup className="mb-3">
                    <FormControl
                      onChange={handleChange}
                      type="password"
                      placeholder="Enter your password"
                      aria-label="name"
                      name="pass"
                      aria-describedby="basic-addon1"
                      value={input.pass}
                    />
                  </InputGroup>
                </Row>
                <Row >
                  <InputGroup className="mb-3">
                    <FormControl
                      onChange={handleChange}
                      type="password"
                      placeholder="Retype your password"
                      aria-label="name"
                      name="repass"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Row>
                <Button onClick={() => addUser()} variant="primary" type="submit" style={{ width: "100%" }}>
                  Create
                </Button>
              </Container>
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