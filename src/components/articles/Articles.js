import { useState } from "react";
import "./Articles.css";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import { Row, Col, Modal } from "react-bootstrap";

import Post from "../post/post";
import PostTwo from "../post/postTwo";
import WeekOneRecap from "../post/weekOneRecap";
import MotwFour from "../post/motwFour";

const Articles = () => {
  const { user } = useAuth0();
  const [mainShow, setMainShow] = useState(false);

  // let teamName = "";

  // switch (user.name) {
  //   case "Drew":
  //     teamName = "The Hamburglars";
  //     break;
  //   case "Andrew":
  //     teamName = "Missies Darn Good Tootsies";
  //     break;
  //   case "AJ":
  //     teamName = "Quack Attack";
  //     break;
  //   case "Eric":
  //     teamName = "Cosmic Gumbo";
  //     break;
  //   default:
  // }

  return (
    // isAuthenticated && (
    <div className="container">
      <h2> Welcome, {user.name}!</h2>

      <Row>
        {/* MAIN CONTENT SHOW */}
        <Col lg="8" md="12">
          <Card className="bigContent" onClick={() => setMainShow(true)}>
            <Card.Img variant="top" src="assets/images/theAndysBowl.png" />
            <figcaption>(Photo: Andrew Pieschke)</figcaption>
            <Card.Body>
              <Card.Title
                className="mainTitle"
                onClick={() => setMainShow(true)}
              >
                {" "}
                The 2021 Andys Bowl
              </Card.Title>
              <Card.Text>2 Hot Steamy Teams. 1 Hot Steamy Week 6.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" className="otherArticles">
          <MotwFour />
          <WeekOneRecap />
          <Post />
          <PostTwo />
        </Col>
      </Row>

      {/* //////////////  MAIN MODAL   //////////////*/}
      <Modal
        size="lg"
        show={mainShow}
        onHide={() => setMainShow(false)}
        aria-labelledby="mainArticle"
      >
        <Modal.Header closeButton>
          <Modal.Title id="mainArticle">
            The 2021 Andys Bowl
            <br /> <span className="postCat">Drew - 10.13.21</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <img
              className="modalPic img-fluid "
              src="assets/images/theAndysBowl.png"
              alt="josh allen points"
            />
          </Row>
          The Paul Bunyan Trophy, The Subway Series, whatever they call it when
          the Jaguars and Dolphins play; we all know these fierce rivalries
          well. Yet they pale in comparison when it comes to the hype
          surrounding this matchup in Mannion Farms Fantasy Football. To state
          the obvious, I’m writing about the Week 6 meeting of Missy’s Darn Good
          Tootsies and the Hamburglars - The Andys Bowl. This will be the first
          opportunity for a team to bring home silverware in the 2021 season as
          these 2 storied SFC franchises slug it out for the Kourage Trophy.
          <br />
          <br />
          Fans across the Outdoor Adventures first floor office circled it on
          their calendars way back when the schedule was released - and their
          anticipation shall be handsomely rewarded. These two teams have not
          disappointed to start the 2021 season, each coming in on fire as early
          playoff contenders and the #1 (Hamburglars) and #3 (Tootsies) teams in
          total scoring.
          <br />
          <br />
          The 2020 showdown was one for the ages. Andys everywhere remember
          exactly where they were as they watched a Monday Night matchup between
          the Saints and Chargers with Alvin Kamara traipsing about for 119
          total yards to secure a glorious 1.6-point victory for the Tootsies
          and manager Andrew Chappell.
          <br />
          <br />
          The Darn Good Tootsies hold a firm 4-2 Andys Bowl grip over the Drew
          Pieschke led Hamburglars since their successful election to Mannion
          Farms in 2015.
          <br />
          <br />
        </Modal.Body>
      </Modal>
    </div>
    // )
  );
};

export default Articles;
