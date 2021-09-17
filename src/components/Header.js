import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";

class Header extends Component {
  render() {
    return (
      <>
        <Container>
          <Navbar fixed="top" expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand>Mannion Farms Fantasy Football</Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;
