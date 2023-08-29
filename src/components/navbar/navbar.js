import React from "react";
import "./nav.css";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Amira",
      title: "Developer",
    };
  }

  render() {
    return (
      <Navbar
        expand="xl"
        className="xl-body-tertiary"
        style={{ backgroundColor: "#4099D0" }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontSize: "30px",
              color: "#C38DEC",
              fontFamily: "fantasy",
            }}
          >
            Movies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home"style={{fontSize:'20px'}}>Home</Nav.Link> */}
              {/* <Nav.Link href="#link"style={{fontSize:'20px'}}>Link</Nav.Link> */}
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "yellow" : "",
                  };
                }}
              >
                Home
              </NavLink>
              {/* <NavLink to="/products" className="nav-link ">Products</NavLink> */}
              {/* <NavLink to="/contactus " className="nav-link ">Contact Us</NavLink> */}
              {/* <NavLink to="/aboutus" className="nav-link ">About us</NavLink> */}
              <NavLink to="/movies" className="nav-link ">
                Popular
              </NavLink>

              <NavLink
                to="/join"
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "yellow" : "",
                  };
                }}
              >
                Join Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <form>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" style={{marginBlock:'10px'}} type="submit">
              Search
            </button>
          </form>
        </Container>
      </Navbar>
      // </Container>
    );
  }
}

export default Header;
