import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import LogoutButton from "./LogoutButton";

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
          >
            <Container>
              <Navbar.Brand className="m-auto">
                Mannion Farms Fantasy Football
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <LogoutButton />
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Header;
