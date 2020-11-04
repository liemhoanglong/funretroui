import React, {useEffect, useState} from 'react';
import './App.css';

import Dashboard from './pages/Dashboard';
import BoardDetail from './pages/BoardDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid className="App" style={{backgroundColor:'#F3F3F3', padding: "0px", height:"max-content"}}>
        <header>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Funretro</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Link className="login-button" to="/login">Login</Link>
          </Navbar>
        </header>
        <br/>
        
        <Switch>
          <Route path="/dashboard/:author" component = {Dashboard}/>
          <Route exact path="/" component = {Login}/>
          <Route path="/signup" component = {Signup}/>
          <Route path="/board/:author/:id" component = {BoardDetail}/>
        </Switch> 
        <br/>
        
        <footer style={{position: "fixed", textAlign: "center", bottom: "0", backgroundColor: "#DDDDDD", width: "100%" }}>
          <span>Make by @LongLin</span>
        </footer> 
      </Container>
    </Router>
  );
}

export default App;
