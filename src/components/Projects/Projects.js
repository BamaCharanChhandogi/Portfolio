import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/Weather.png";
import food from "../../Assets/Projects/Food-Recipe.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Product from "../../Assets/Projects/Productlanding.png";
import countdown from "../../Assets/Projects/Stopwatch.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few main projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Product}
              isBlog={false}
              title="Product Landing Page"
              description="Its basically simple Ecomerce site.
              Its use in HTML CSS and JavaScript.Its my first Year project."
              ghLink="https://github.com/BamaCharanChhandogi/Product-Landing-Page"
              demoLink="https://bamacharanchhandogi.github.io/Product-Landing-Page/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/s"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <h1 className="Project-subHeading"> <strong className="purple">Simple</strong> Project</h1>
          <p style={{ color: "white" }}>
          Here are a few simple projects.
        </p>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-Site"
              description="It is Weather-prediction site. Simple site using HTML,CSS,Javascript.Applied API concept"
              ghLink="https://github.com/BamaCharanChhandogi/Weather-App"
              demoLink="https://bamacharanchhandogi.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countdown}
              isBlog={false}
              title="Countdown-Timer"
              description="its also Timer Count site. used HTML, CSS and basics Javascript.Applied API concept"
              ghLink="https://github.com/BamaCharanChhandogi/Stopwatch"
              demoLink="https://bamacharanchhandogi.github.io/Stopwatch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food-Recipe"
              description="it is basically Food-Recipe site. Where You can see the recipe of all popular food.
              used HTML, CSS and basics javascript,Applied API concept."
              ghLink="https://github.com/BamaCharanChhandogi/Chitkara-Mess"
              demoLink="https://bamacharanchhandogi.github.io/Chitkara-Mess/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
