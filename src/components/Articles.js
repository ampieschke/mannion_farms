import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Articles = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="container">
        <Row>
          {/* MAIN CONTENT SHOW */}
          <Col lg="8" md="12" className="bigContent">
            <Card>
              <Card.Img
                variant="top"
                src="assets/images/RGxNYVVuLMlj_xNOIexDA6gcK_720x480.jpg"
              />
              <figcaption>(Photo: Patrick Smith / Getty Images)</figcaption>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <h3>Hello</h3>
          </Col>
        </Row>
      </div>
    )
  );
};

export default Articles;
