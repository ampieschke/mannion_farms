import "./post.css";
import { useState } from "react";
// import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";

export default function Post() {
  const [artTwoShow, setArtTwoShow] = useState(false);

  return (
    <div className="post">
      <div className="postInfo">
        <span className="postTitle" onClick={() => setArtTwoShow(true)}>
          Content Needed!
        </span>
        <div className="postCats">
          <span className="postCat">Site Maintenence</span>
        </div>
        <hr />
        <span className="postDate">9.17.21</span>
      </div>
      <p className="postDescription">
        How to create a blog website using React.js. Blog app React project from
        scratch for beginners. Design React blog app using functional React
        components and React Router Dom.
      </p>

      {/* //////////////  Second MODAL   //////////////*/}
      <Modal
        size="lg"
        show={artTwoShow}
        onHide={() => setArtTwoShow(false)}
        aria-labelledby="secondArticle"
      >
        <Modal.Header closeButton>
          <Modal.Title id="secondArticle">
            Content Needed!
            <span className="postCat"> Drew - 9.17.21</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hi Dummies.
          <br />
          <br />
          I made this site to store our content, it's still a bit crude but it's
          going to evolve over time. It sure would be swell to have some stuff
          here to make it useful! Shame we no longer have an award winning
          journalist in the league... Someone consider picking up The Power
          Rankings? Those are fun!
          <br />
          <br />
        </Modal.Body>
      </Modal>
    </div>
  );
}
