import React, { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./pages/Dashboard";
import BigBoardDetail from "./pages/BigBoardDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/User";

import UserContext from "./context/UserContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";
import NavBar from "./components/NavBar";
// import Axios from 'axios';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [islogin, setIslogin] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let tokenGoogle = localStorage.getItem("googleAuth");
      let tokenFB = localStorage.getItem("fbAuth");
      let token = localStorage.getItem("token");
      let user = localStorage.getItem("user");
      if (token === null || user === null) {
        localStorage.setItem("token", "");
        token = "";
        localStorage.setItem("user", "");
        user = "";
      }
      if (tokenGoogle) {
        setUserData({
          token,
          user: { username: localStorage.getItem("username") },
        });
      } else if (tokenFB) {
        setUserData({
          token,
          user: { username: localStorage.getItem("username") },
        });
      } else {
        const config = {
          method: "get",
          // url: "https://funretroapi.herokuapp.com/profile",
          url: "http://localhost:3001/profile",
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        try {
          const userRes = await axios(config);
          setUserData({
            token,
            user: userRes.data,
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    checkLoggedIn();
  }, [islogin]);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    setIslogin(false);
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("googleAuth", "");
    localStorage.setItem("fbAuth", "");
    localStorage.setItem("username", "");
  };

  return (
    <Router>
      <UserContext.Provider value={{ islogin, setIslogin }}>
        <div className="App">
          <NavBar logout={logout} userData={userData} />
          <br />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard/:author" component={Dashboard} />
            <Route exact path="/board/:author/:id" component={BigBoardDetail} />
            <Route exact path="/user/:id" component={User} />
          </Switch>
          <br />
          <footer
            style={{
              position: "fixed",
              textAlign: "center",
              bottom: "0",
              backgroundColor: "#DDDDDD",
              width: "100%",
            }}
          >
            <span>Make by @LongWangLin</span>
          </footer>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
