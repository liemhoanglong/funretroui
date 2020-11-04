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
  //đang lỗi input nhá!
  const [input, setInput] = useState({email: '', pass: '', fullname:''}) 

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    // console.log(input);
  };

  // const handleChange2 = e => {
  //   setInput({name: e.target.value});
  //   console.log(input);
  // };  
  
  // const handleChange3 = e => {
  //   setInput({pass: e.target.value});
  //   console.log(input);
  // };  

  const addUser = async () => {
    // await console.log(input)

    // nhớ chỉnh về author ID khi làm login
    // const data = {name: txt, authorId: authorId};
    const res = await userAPI.add(input);
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
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Email address: </InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <FormControl
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                      name="email"
                      value={input.email}
                    />
                  </InputGroup>
                </Row>
                <Row >
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Full name: </InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <FormControl
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      name="fullname"
                      value={input.fullname}
                    />
                  </InputGroup>
                  {/* <h4 style={{float: "left"}}>Full name</h4>
                  <input name="name" value={input.name} onChange={handleChange} type="text" placeholder="Enter your full name" /> */}
                </Row>
                <Row >
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Password: </InputGroup.Text>
                    </InputGroup.Prepend> */}
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
                  {/* <h4 style={{float: "left"}}>Password</h4>
                  <input name="pass" value={input.pass} onChange={handleChange} type="password" placeholder="Password" /> */}
                </Row>
                <Row >
                  <InputGroup className="mb-3">
                    {/* <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Retype your password: </InputGroup.Text>
                    </InputGroup.Prepend> */}
                    <FormControl
                      onChange={handleChange}
                      type="password"
                      placeholder="Retype your password"
                      aria-label="name"
                      name="repass"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                  {/* <h4 style={{float: "left"}}>Retype password</h4> */}
                  {/* <Input type="password" placeholder="Retype Password" />  */}
                  {/* <input name="repass" value={input.repass} onChange={handleChange} type="password" placeholder="Retype Password" />  */}
                </Row>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
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