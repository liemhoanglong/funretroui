import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { userData, logout } = props;

  let id = localStorage.getItem("user");

  return (
    <header>
      <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/dashboard/" + id} className="ps-4">
            Small Trello
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              {userData.user ? (
                <>
                  <Link className="link-custom" to={"/dashboard/" + id}>
                    <Button>DashBoard</Button>
                  </Link>
                  <Link className="link-custom" to={"/User/" + id}>
                    <Button>{userData.user.username}</Button>
                  </Link>
                  <Link onClick={logout} to="/login" className="link-custom">
                    <Button>Logout</Button>
                  </Link>
                </>
              ) : (
                <Link className="link-custom" to="/login">
                  <Button>Sign in</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
