import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myimg from "../../Assets/IMG_20220705_183813.jpg";
import Toolstack from "./Toolstack";
import Education from "./Education";
import Experienced from "./Experienced";
import './About.css';

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row className="about-main"> 
        <h1 style={{ fontSize: "2.1em", marginBottom: "40px" }}>
               <strong className="purple">My Education & Experiance</strong>
            </h1>
        <Col className="education-sec"> 
        <Education/>           
          </Col>
          <Col className="about-Exp">
            <Experienced/>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
