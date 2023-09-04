import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/Weather.png";
import food from "../../Assets/Projects/Food-Recipe.png";
import ecart from "../../Assets/Projects/ecart.png";
import Product from "../../Assets/Projects/Productlanding.png";
import instabasic from "../../Assets/Projects/instaclone-basic.png";
import github from "../../Assets/Projects/github.png";
import Quora from "../../Assets/Projects/quora.png";
import countdown from "../../Assets/Projects/Stopwatch.png";
import Todo from "../../Assets/Projects/To-do.png";
import WordCount from "../../Assets/Projects/Wordcounter.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quora}
              isBlog={false}
              title="Quora Clone"
              description="It's basically Quora clone using React and Firebase. It's my 3rd sem project
              I have learned a lot concepts about React. I have also learned how to create a clone of React."
              ghLink="https://github.com/BamaCharanChhandogi/Quora-Clone"
              demoLink="https://quora-clone-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github-Profile-View"
              description="This is a GitHub profile viewer site. If you enter the username of any person who uses a GitHub account, you can view their profile here. We utilized the GitHub API and React for its development"
              ghLink="https://github.com/BamacharanChhandogi/github-profile-view"
              demoLink="https://github-profile-view-sigma.vercel.app/"
            />
          </Col>

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecart}
              isBlog={false}
              title="Shopping Page with React"
              description="it is basically Shopping site. Where You can see the add T-shirts in cart.
              used HTML, CSS and basics javascript(React),Applied ContextAPI and Router concept."
              ghLink="https://github.com/BamaCharanChhandogi/e-cart"
              demoLink="https://e-cart-alpha.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="To-Do List APP"
              description="it is basically To Do List. Where You can add task or text.
              used HTML, CSS and basics javascript(React)"
              ghLink="https://github.com/BamaCharanChhandogi/To-Do-List"
              demoLink="https://bamacharanchhandogi.github.io/To-Do-List/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WordCount}
              isBlog={false}
              title="Word Counter"
              description="it is basically Word Counter. Where You can count total word in sentences.
              used HTML, CSS and basics javascript(React)."
              ghLink="https://github.com/BamaCharanChhandogi/Word-Counter"
              demoLink="https://bamacharanchhandogi.github.io/Word-Counter/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instabasic}
              isBlog={false}
              title="basic social media with React"
              description="it is basically Social site. Where You can add photo in firebase.
              used HTML, CSS and basics javascript(React),Applied Meterial UI and Authentication concept."
              ghLink="https://github.com/BamaCharanChhandogi/instagram-clone-react"
              // demoLink="https://e-cart-alpha.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
