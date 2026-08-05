import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bama Charan Chhandogi </span>
            from <span className="purple"> Kolkata, India.</span>
            <br /> I am a second year student pursuing Bachelor of Engineering
            in Computer Science and Engineering at Chitkara University.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Your reality is a reflection of your belief!"{" "}
          </p>
          <footer className="blockquote-footer">Bama Charan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
