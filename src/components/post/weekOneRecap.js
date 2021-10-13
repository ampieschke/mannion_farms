import "./post.css";
import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";

export default function PostFour() {
  const [weekOneRecapShow, setWeekOneRecapShow] = useState(false);

  return (
    <div className="post">
      <Row>
        <Col xs="5">
          <img
            className="postPic img-fluid "
            src="assets/images/week1header.png"
            alt="patrick mahomes"
          />
        </Col>
        <Col xs="7">
          <div className="postInfo">
            <span
              className="postTitle"
              onClick={() => setWeekOneRecapShow(true)}
            >
              Week 1 Recap
            </span>
            <div className="postCats">
              <span className="postCat">Weekly Recap</span>
            </div>
            <hr />
            <span className="postDate">9.14.21</span>
          </div>
          <p className="postDescription">
            Trying to find some time here while I prepare for tonight's baseball
            game, so here we go!
          </p>
        </Col>
      </Row>
      <Modal
        size="lg"
        show={weekOneRecapShow}
        onHide={() => setWeekOneRecapShow(false)}
        aria-labelledby="fourthArticle"
      >
        <Modal.Header closeButton>
          <Modal.Title id="fourthArticle">
            Week 1 Recap
            <br />
            <span className="postCat"> Alex - 9.14.21</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <img
              className="modalPic img-fluid "
              src="assets/images/week1header.png"
              alt="patrick mahomes"
            />
          </Row>
          Trying to find some time here while I prepare for tonight's baseball
          game, so here we go!
          <br />
          <br />
          <b>They Burned My Friend (0-0) at Quack Attack (0-0)</b>
          <br />
          For the first time in the history of the Mannion Farms League, a team
          managed by Alex loses in week one. They Burned My Friend put up decent
          numbers, but they didn't stand a chance against this week's high
          points winner, Quack Attack. Mahomes to Kelce was a lethal combination
          and Joe Mixon dropped 25, so even thought Tyreek Hill and CeeDee Lamb
          had great games, it wasn't enough.
          <br />
          <b>Final: TBMF (0-1) 139.8 - 165.55 QA (1-0)</b>
          <br />
          <br />
          <b>Missy's Darn Good Tootsies (0-0) at Snaggle Tooth's (0-0)</b>
          <br />
          This one was our highest scoring matchup of the week, with Missy's
          Darn Good Tootsies slotting in right behind Quack Attack in the race
          for high points. The Dak Prescott-Amari Cooper stack proved to be a
          winning combination against a Snaggle Tooth's team that got nice
          performances out of the vet Tom Brady and the rookie Ja'Marr Chase.
          They just weren't nice enough.
          <br />
          <b>Final: MDGT (1-0) 165.45 - 155.15 ST (0-1)</b>
          <br />
          <br />
          <b>Turd Wrestlers (0-0) at Saginaw FroHawks (0-0)</b>
          <br />
          Victor started Patrick Ricard, for Christ's sake, and still won this
          game, which goes to show you how poorly things went for Kevin and his
          Turd Wrestlers. Their 98.85 points are the low for the season, but
          it's only week one, so it's unlikely that sticks. One guy on the
          Wrestlers scored over 15 points, and that was first-time loser Trevor
          Lawrence. The FroHawks saw Russell Wilson and DeAndre Hopkins top 20,
          with some other contributors down the lineup. Fucking Patrick Ricard.
          <br />
          <b>Final: TW (0-1) 98.85 - 126.9 SF (1-0)</b>
          <br />
          <br />
          <b>Wise Greasy Bastard (0-0) at The Hamburglers (0-0)</b>
          <br />
          The Hamburglers were another team vying for high points in week one,
          behind excellent outpourings from Deebo Samuel and Antonio Brown. Even
          Matt Gay dropped 12 on the Bears. For the Bastard, relying on the
          Packers probably cost them a W, as Aaron Rodgers and Aaron Jones
          combined for a horrifying 6.25 points. Not the scores you want from
          your star QB and first round pick. This was an easy one for the
          'Burglers, who look like a team to be reckoned with.
          <br />
          <b>Final: WGB (0-1) 113.65 - 162.25 HAM (1-0)</b>
          <br />
          <br />
          <b>Darth Brooks (0-0) at Frank's Little Beauties (0-0)</b>
          <br />
          Our closest matchup in week one was between Darth Brooks and Frank's
          Little Beauties, with Darth taking the W by only 4 points. Josh Allen
          and Jamaal Williams led the scoring for the victors, while CMC and
          Lamar Jackson put up admirable numbers in defeat.
          <br />
          <b>Final: DB (1-0) 129.8 - 125.05 (0-1)</b>
          <br />
          <br />
          <b>FLB Hulk Pickles (0-0) at Cosmic Gumbo (0-0)</b>
          <br />
          League newcomer Bear and his Hulk Pickles earned their first win over
          Eric and his Cosmic Gumbo on the backs of two white boys: Joe Burrow
          and Cooper Kupp. Gumbo saw Kyler Murray account for 5 TDs and the
          continued emergence of TJ Hockenson in Detroit, but the new guy walked
          out with the win.
          <br />
          <b>Final: HP (1-0) 144.35 - 129.55 CG (0-1)</b>
          <br />
          <br />
        </Modal.Body>
      </Modal>
    </div>
  );
}
