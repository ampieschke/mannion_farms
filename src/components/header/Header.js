import React, { Component } from "react";
import "./Header.css";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/NavBar";
import LogoutButton from "../LogoutButton";

class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <Navbar
            className="ope"
            fixed="top"
            expand="lg"
            variant="dark"
            bg="dark"
            collapseOnSelect
          >
            <Container>
              <Navbar.Brand className="m-auto">
                Mannion Farms League
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link href="./">Home</Nav.Link>
                  <Nav.Link href="./HallofRecords">Records</Nav.Link>
                  <Nav.Link href="./standings">Standings</Nav.Link>
                  <Nav.Link>
                    <LogoutButton />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar className="justify-content-end"></Navbar>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;
