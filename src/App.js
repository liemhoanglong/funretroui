import React, {useEffect, useState} from 'react';
import './App.css';

import userAPI from './api/user.api';

import Dashboard from './pages/Dashboard';
import BoardDetail from './pages/BoardDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './pages/User';
import UserContext from "./context/UserContext";

import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from 'axios';
// import Axios from 'axios';

function App() {
  let id = localStorage.getItem("user");
  // const [name, setName] = useState('');

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [islogin, setIslogin]  = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let tokenGoogle = localStorage.getItem("googleAuth");
      let token = localStorage.getItem("token");
      let user = localStorage.getItem("user");
      if (token === null || user === null){
        localStorage.setItem("token","");
        token = "";
        localStorage.setItem("user","");
        user = "";
      }
      if (tokenGoogle){
        setUserData({
          token,
          user: {username: localStorage.getItem("username")},
        });
      }
      else {
        
        //http://localhost:3000/profile
        const config = {
          method: 'get',
          url: 'https://funretroapi.herokuapp.com/profile',
          headers: { 
            'Authorization': 'Bearer ' + token  
          }
        };
        try {
          const userRes = await axios(config);
          setUserData({
            token,
            user: userRes.data,
          });
          console.log(userRes.data)
        } catch (error) {
          console.log(error)
        }
      }
    } 

    checkLoggedIn();
  }, [setUserData, islogin])

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    setIslogin(false)
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("googleAuth", "");
    localStorage.setItem("username", "");
  }

  return (
    <Router>
      <UserContext.Provider value={{ islogin, setIslogin }}>
        <Container fluid className="App" style={{backgroundColor:'#F3F3F3', padding: "0px", height:"max-content"}}>
          <header>
            {
              userData.user ?
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href={"/dashboard/" + id} style={{paddingLeft:"2rem"}}>Funretro</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Link className="login-button" to={"/dashboard/" + id} style={{padding:"0rem 2rem"}}>DashBoard</Link>
            <Link className="login-button" to={"/User/" + id} style={{padding:"0rem 2rem"}}>{userData.user.username}</Link>
                {/* <Link className="login-button" to={"/User/" + id} style={{padding:"0rem 2rem"}}>{name}</Link> */}
                <Link onClick={logout} to="/login" className="login-button" style={{padding:"0rem 2rem"}}>Logout</Link>
              </Navbar>
              :
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/login" style={{paddingLeft:"2rem"}}>Funretro</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Link className="login-button" to="/login" style={{padding:"0rem 2rem"}}>Login</Link>
              </Navbar>
            }
          </header>
          <br/>
          <Switch>
            <Route exact path="/" component = {Login}/>
            <Route path="/login" component = {Login}/>
            <Route path="/signup" component = {Signup}/>
            <Route path="/dashboard/:author" component = {Dashboard}/>
            <Route path="/board/:author/:id" component = {BoardDetail}/>
            <Route path="/user/:id" component = {User}/>

          </Switch> 
          <br/>
          <footer style={{position: "fixed", textAlign: "center", bottom: "0", backgroundColor: "#DDDDDD", width: "100%" }}>
            <span>Make by @LongWangLin</span>
          </footer> 
        </Container>
      </UserContext.Provider>
      
    </Router>
  );
}

export default App;
