import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gautam Sharma </span>
            from <span className="purple"> Bulandshahr, Uttar Pradesh, India.</span>
            <br />
            I am currently a fresher and. I have completed B.Tech in Computer Science and Engineering at Dewan V.S. Institute of Engineering and Technology, Meerut.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening a Song
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Success is not just about what you accomplish in your life; it's about what you inspire others to do."{" "}
          </p>
          <footer className="blockquote-footer">Gautam Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
