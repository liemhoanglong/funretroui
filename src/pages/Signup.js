import React, {useEffect, useState} from 'react';
import '../App.css';

// import userAPI from '../api/user.api';


import {Button, Navbar, Nav, Form, FormControl, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
   
const Signup = ({ match }) =>{
//   const [bigBoards, setBigBoards] = useState([])
  
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         let id = "5f981b31face1e2ddb883a4c";
//         // let id = match.params.id;

//         const res = await bigBoardAPI.get(id);
//         setBigBoards(res);
//       } catch (error) {
//         console.log('Failed to fetch: ', error);
//       }
//     } 
//     fetchAll();
//   }, [])


  return(
    <>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <Container style={{ backgroundColor: "white", padding: "2rem 2rem"}}>
              <h3>Sign up</h3>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit" style={{ width: "100%" }}>
                  Create
                </Button>
              </Form>
              <br/>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}
export default Signup