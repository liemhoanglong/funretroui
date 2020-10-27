import React, {useEffect, useState} from 'react';
import './App.css';
import { boardAPI } from './api/board.api';
import Board from './components/Board';

import {Button, Navbar, Nav, Form, FormControl, Row, Col, Container, Card, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [boards, setBoards] = useState([])
  useEffect(() => {
    async function fetchAll() {
      const res = await boardAPI.getAllBoard();
      setBoards(res);
    } 
    fetchAll();
  }, [])
  return (
    <div className="App" style={{backgroundColor:'#F3F3F3', height:"100vh"}}>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Funretro</Navbar.Brand>
          <Nav className="mr-auto">
            <Form inline>
              <FormControl type="text" placeholder="Filter your cards" className="mr-sm-2" />
              <Button variant="light" >
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
              </Button>
            </Form>
          </Nav>
          <Button variant="primary">Long Lin</Button>
        </Navbar>
      </header>
        <br/>
        <Container fluid>
          <Row>
            <Col>
              <div className="container">
                <div className="row">
                  <h5 style={{float: "left"}}>Went well</h5>  
                </div>
                <div className="row" style={{marginBottom:"10px"}}>
                  <button type="button" className="btn-add btn btn-secondary" style={{width:"100%", borderColor: "#DDDDDD" }}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </button>
                  <hr/>
                </div>
                {boards.map((board, i) => {
                  return (
                    <Board data={board} type='1'/>
                  )
                })}
              </div>
            </Col>
            <Col>
            <div className="container">
                <div className="row">
                  <h5 style={{float: "left"}}>To improve</h5>  
                </div>
                <div className="row" style={{marginBottom:"10px"}}>
                  <button type="button" className="btn-add btn btn-secondary" style={{width:"100%", borderColor: "#DDDDDD" }}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </button>
                  <hr/>
                </div>
                {boards.map((board, i) => {
                  return (
                    <Board data={board} type="2"/>
                  )
                })}
              </div>
            </Col>
            <Col>
            <div className="container">
                <div className="row">
                  <h5 style={{float: "left"}}>Action Items</h5>  
                </div>
                <div className="row" style={{marginBottom:"10px"}}>
                  <button type="button" className="btn-add btn btn-secondary" style={{width:"100%", borderColor: "#DDDDDD" }}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </button>
                  <hr/>
                </div>
                {boards.map((board, i) => {
                  return (
                    <Board data={board} type="3"/>
                  )
                })}
              </div>
            </Col>
          </Row> 
        </Container>
      <footer style={{position: "fixed", textAlign: "center", bottom: "0", backgroundColor: "#DDDDDD", width: "100%" }}>
        <span>Make by @LongLin</span>
      </footer>  
    </div>

  );
}

export default App;
