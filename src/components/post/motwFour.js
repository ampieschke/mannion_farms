import "./post.css";
import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";

export default function MotwFour() {
  const [motwFourShow, setMotwFourShow] = useState(false);

  return (
    <div className="post">
      <Row>
        <Col xs="5">
          <img
            className="postPic img-fluid "
            src="assets/images/motwFour.png"
            alt="patrick mahomes"
          />
        </Col>
        <Col xs="7">
          <div className="postInfo">
            <span className="postTitle" onClick={() => setMotwFourShow(true)}>
              Matchup of the Week: Week 4
            </span>
            <div className="postCats">
              <span className="postCat">Weekly Recap</span>
            </div>
            <hr />
            <span className="postDate">9.30.21</span>
          </div>
          <p className="postDescription">
            I have 20 Minutes Until Clay’s Jui Jitsu Practice Is Over Edition
          </p>
        </Col>
      </Row>
      <Modal
        size="lg"
        show={motwFourShow}
        onHide={() => setMotwFourShow(false)}
        aria-labelledby="motwFour"
      >
        <Modal.Header closeButton>
          <Modal.Title id="motwFour">
            Matchup of the Week: Week 4
            <span className="postCat"> Adam - 9.30.21</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <img
              className="modalPic img-fluid "
              src="assets/images/motwFour.png"
              alt="josh allen points"
            />
          </Row>
          <h2>Darth Brooks @ Hulk Pickles</h2>
          <p>
            Couple o’ teams still looking for their first loss. Here are some
            wild speculations:
            <br />
            <br />
            <b>Darth Brooks:</b>
            <br />
            <br />- Positive: Allen finally gets back in his groove with Diggs
            enroute to 41.2 points. Metcalf/ Evans/ Thielen combine for 5
            tuddies.
            <br />
            <br />- Negative: Everyone else sucks this week.
            <br />
            <br />
            <b>Hulk Pickles:</b>
            <br />
            <br />
            -Positive: Cook does Cook things, 24.1 points. Moore breaks out 130+
            yards and two touchdowns. Sutton get 14 receptions for 145 yards.
            <br />
            <br />- Negative: Kupp gets schemed out, 5.2 points. Gordon leaves
            in the game early in the 2nd quarter with 22 yards on the ground and
            no receptions.
            <br />
            <br />
            <b>Darths over Pickles 136.2-132.7</b>
            <br />
            <br />
            Have a blessed week everyone 😘
            <br />
            <br />
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
