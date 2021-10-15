import { Row, Col, Container } from "react-bootstrap";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavFoot.css";

const NavFoot = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Container className="bottomPart text-center">
        <Row>
          <Col xs="4" className="footicon">
            <a href="/">
              <i
                className="fas fa-book-open fa-2x"
                style={{ color: "white" }}
              ></i>
            </a>
          </Col>
          <Col xs="4" className="footicon">
            <a href="/HallofRecords">
              <i className="fas fa-trophy fa-2x" style={{ color: "white" }}></i>
            </a>
          </Col>
          <Col xs="4" className="footicon">
            <LogoutButton />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default NavFoot;
