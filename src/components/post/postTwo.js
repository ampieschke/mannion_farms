import "./post.css";
import { useState } from "react";
// import Button from "@restart/ui/esm/Button";
import { Modal, Row } from "react-bootstrap";

export default function PostTwo() {
  const [artThreeShow, setArtThreeShow] = useState(false);

  return (
    <div className="post">
      <div className="postInfo">
        <span className="postTitle" onClick={() => setArtThreeShow(true)}>
          Algorithm to Win Your Week
        </span>
        <div className="postCats">
          <span className="postCat">Premium Content</span>
        </div>
        <hr />
        <span className="postDate">9.17.21</span>
      </div>
      <p className="postDescription">
        Tired of losing every gosh darn week? Sick of watching your childrens'
        respect for you ebb away with each Sit/Start miss? Fret no more!
        Scientists from MIT have discovered an algorithm to ensure you never
        lose again!
      </p>

      {/* //////////////  Second MODAL   //////////////*/}
      <Modal
        size="lg"
        show={artThreeShow}
        onHide={() => setArtThreeShow(false)}
        aria-labelledby="secondArticle"
      >
        <Modal.Header closeButton>
          <Modal.Title id="secondArticle">
            Algorithm to Win Your Week
            <br />
            <span className="postCat"> Drew - 9.17.21</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="video">
          <h3>Thank you for reading!</h3>
          <br />
          <br />
          To continue reading our Premium Content, you must be a Mannion Farms
          home delivery or digital subscriber. Please sign up for an account
          today! Or if you already have an account log in here.
          <br />
          <br />
          <Row>
            <a
              href="https://www.youtube.com/embed/tfdMsxSjY3o?start=95"
              target="blank"
            >
              Sign Up
            </a>
            <a
              href="https://www.youtube.com/embed/tfdMsxSjY3o?start=95"
              target="blank"
            >
              Log In
            </a>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
