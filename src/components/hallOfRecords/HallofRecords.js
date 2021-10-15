import { Container } from "react-bootstrap";
import "./HallofRecords.css";

export default function HallofRecords() {
  return (
    <Container className="records">
      <h3>High/Low Points </h3>
      <p>Week 2: Kevin (174.55) / Chappell (89.55)</p>
      <p>Week 1: Chappell (166.45) / Kevin (98.85) </p>
      <p>
        Week 3: Trevor (181.1) / <b>Victor (87.3)</b>
      </p>
      <p>Week 4: Drew (149) / Bear (98.45) </p>
      <p>
        Week 5: <b>Drew (206.6)</b> / Eric (91.95)
      </p>

      <h3>Punishments</h3>
      <p>Low Points Pie (2019) - Eric from AJ</p>
      <p>Forfeit Pie (2019) - Schanz from TBD </p>
      <p>Low Points Pie (2020) - Trevor from Kevin</p>
      <p>Forfeit Pie (2020) - Trevor from TBD</p>

      <h3>History of Champions</h3>
      <p>2020 Champion: Darth Brooks, mgr. Mike Blodgett</p>
      <p>2019 Champion: The Sad Lads of Schadenfraude, mgr. Kevin Bentley</p>
      <p>2018 Champion: Frank's Little Beauties, mgr. Dave Wilsey</p>
      <p>2017 Champion: They Burned My Friend, mgr. Alex Seder</p>
      <p>2016 Champion: Quack Attack, mgr. AJ Quackenbush</p>
      <p>2015 Champion: Frank's Little Beauties, mgr. Dave Wilsey</p>
      <p>2014 Champion: Snaggle Tooth, mgr. Trevor Schmidt</p>
      <p>2013 Champion: Stripey Wotsits, mgr. Kevin Bentley</p>
      <p>2012 Champion: Snaggle Tooth's, mgr. Trevor Schmidt </p>
      <p>2011 Champion: Saginaw FroHawks, mgr. Victor Leichner </p>
      <p>2010 Champion: Three Wizards Fury, mgr. Michael Blodgett </p>
      <p>2009 Champion: Wise Greasy Bastard, mgr. Adam Jacqmain</p>
    </Container>
  );
}
