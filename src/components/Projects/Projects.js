import React from "react";
import './Project.css';
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
import BenChi from "../../Assets/Projects/Bengali-chitkarian.png";
import countdown from "../../Assets/Projects/Stopwatch.png";
import Todo from "../../Assets/Projects/To-do.png";
import WordCount from "../../Assets/Projects/Wordcounter.png";
import APIFinder from "../../Assets/Projects/APIFinder.png";
import vsCodeTheme from "../../Assets/Projects/VSCodeTheme.png";
import JavaSnippet from "../../Assets/Projects/JavaSnippet.png";
import ReadMeEasy from "../../Assets/Projects/ReadmeG.png";
import GeminiBot from "../../Assets/Projects/GeminiBoT.png";
import useraectgfg from "../../Assets/Projects/usereactGFG.png";
import usereactsummary from "../../Assets/Projects/usereactsummary.png";
import reactGFG from "../../Assets/Projects/reactGFG.png";
import DiabetesPred from "../../Assets/Projects/Diabetes.png";

function Projects() {
  const webProjects = [
    {
      imgPath: github,
      title: "Git-Finder",
      description: "GitHub Finder is a social platform that leverages GitHub authentication to provide users with a space to share their thoughts, ideas, and insights with the developer community. Users can post updates, interact with others, and explore GitHub profiles of fellow users.",
      ghLink: "https://github.com/BamaCharanChhandogi/GitFinder",
      demoLink: "https://gitfinder-psi.vercel.app/"
    },
    {
      imgPath: Quora,
      title: "Quora Clone",
      description: "Quora-Clone is a simple clone of the popular Q&A website Quora, built using Redux and React. The project aims to provide a platform where users can ask and answer questions on various topics.",
      ghLink: "https://github.com/BamaCharanChhandogi/Quora-Clone",
      demoLink: "https://quora-clone-eight.vercel.app/"
    },
    {
      imgPath: Product,
      title: "Product Landing Page",
      description: "A simple E-commerce site using HTML, CSS, and JavaScript. My first-year project.",
      ghLink: "https://github.com/BamaCharanChhandogi/Product-Landing-Page",
      demoLink: "https://bamacharanchhandogi.github.io/Product-Landing-Page/"
    },
    {
      imgPath: BenChi,
      title: "Bengali-Chitkarian - Your Chitkara Bengali Hub",
      description: "Welcome to Bengali-Chitkarian, your go-to platform for connecting with fellow Bengali students at Chitkara University, Punjab. We are delighted to have you here and look forward to fostering a vibrant Bengali community at Chitkara.",
      ghLink: "https://github.com/BamaCharanChhandogi/Bengali-Chitkarian",
      demoLink: "https://chitkara-bengali.vercel.app/"
    },
    {
      imgPath: ReadMeEasy,
      title: "READMEasy: AI-Powered README Generator",
      description: "READMEasy is a user-friendly web platform that empowers you to generate comprehensive and engaging README files for your software projects. Powered by advanced AI models, ReadMeister effortlessly tailors your README content based on your project's unique details",
      ghLink: "https://github.com/BamaCharanChhandogi/READMEasy",
      demoLink: "https://readm-easy.vercel.app/"
    },

  ];

  const simpleProjects = [
    {
      imgPath: weather,
      title: "Weather-Site",
      description: "A weather prediction site using HTML, CSS, JavaScript, and API.",
      ghLink: "https://github.com/BamaCharanChhandogi/Weather-App",
      demoLink: "https://bamacharanchhandogi.github.io/Weather-App/"
    },
    {
      imgPath: countdown,
      title: "Countdown-Timer",
      description: "A timer count site using HTML, CSS, and basic JavaScript.",
      ghLink: "https://github.com/BamaCharanChhandogi/Stopwatch",
      demoLink: "https://bamacharanchhandogi.github.io/Stopwatch/"
    },
    {
      imgPath: food,
      title: "Food-Recipe",
      description: "A food recipe site using HTML, CSS, JavaScript, and API.",
      ghLink: "https://github.com/BamaCharanChhandogi/Chitkara-Mess",
      demoLink: "https://bamacharanchhandogi.github.io/Chitkara-Mess/"
    },
    {
      imgPath: ecart,
      title: "Shopping Page with React",
      description: "A shopping site using React, Context API, and Router.",
      ghLink: "https://github.com/BamaCharanChhandogi/e-cart",
      demoLink: "https://e-cart-alpha.vercel.app/"
    },
    {
      imgPath: Todo,
      title: "To-Do List APP",
      description: "A To-Do List app using HTML, CSS, and React.",
      ghLink: "https://github.com/BamaCharanChhandogi/To-Do-List",
      demoLink: "https://bamacharanchhandogi.github.io/To-Do-List/"
    },
    {
      imgPath: WordCount,
      title: "Word Counter",
      description: "A word counter app using HTML, CSS, and React.",
      ghLink: "https://github.com/BamaCharanChhandogi/Word-Counter",
      demoLink: "https://bamacharanchhandogi.github.io/Word-Counter/"
    },
    {
      imgPath: instabasic,
      title: "Basic Social Media with React",
      description: "A basic social media site using React, Material UI, and Firebase Authentication.",
      ghLink: "https://github.com/BamaCharanChhandogi/instagram-clone-react"
    }
  ];

  const botProjects = [
    {
      imgPath: APIFinder,
      title: "API-Finder-BOT",
      description: "API Finder Bot is a Telegram bot that helps users find API site links by providing the name of the API.",
      ghLink: "https://github.com/BamaCharanChhandogi/API-Finder-BOT",
      demoLink: "https://t.me/apifinder_bot"
    },
    {
      imgPath: GeminiBot,
      title: "Discord-Gemini-Bot",
      description: "his is a Discord bot that utilizes the Gemini API to generate responses and images based on user input. The bot can engage in conversations, answer questions, and create images on the fly.",
      ghLink:"https://github.com/BamaCharanChhandogi/Discord-Gemini-Bot",
      demoLink: "https://github.com/BamaCharanChhandogi/Discord-Gemini-Bot"
    }
  ];
  
  const vsCodeExtensions = [
    {
      imgPath: vsCodeTheme,
      title: "ChromaBlend - VS Code Theme",
      description: "ChromaBlend is a vibrant and dynamic Visual Studio Code theme that blends the colors of green, pink, and blue to create a unique coding experience. Dive into a visually appealing environment that balances aesthetics with readability.",
      ghLink: "https://github.com/BamaCharanChhandogi/ChromaBlend",
      demoLink: "https://marketplace.visualstudio.com/items?itemName=BamaCharanChhandogi.chromablend"
    },
    {
      imgPath: JavaSnippet,
      title: "Java Easy Snippet",
      description: "Boost your Java development productivity with the Java Boilerplate Generator extension for Visual Studio Code. Say goodbye to repetitive code setup and hello to streamlined project initialization. This extension provides essential Java boilerplate code snippets and templates, helping you kickstart your projects swiftly and efficiently..",
      ghLink: "https://github.com/BamaCharanChhandogi/Java-Easy-Snippet",
      demoLink: "https://marketplace.visualstudio.com/items?itemName=BamaCharanChhandogi.JavaSnippet"
    },

  ];

  const NPMProjects = [
    {
      imgPath: usereactsummary,
      title: "Use React Summary",
      description: "This is a React component that allows you to summarize text using the Google Generative AI APIIt provides a custom React hook useSummary that handles the text summarization process and returns the summarized text in Markdown format.",
      ghLink: "https://github.com/BamaCharanChhandogi/use-react-summary",
      demoLink: "https://www.npmjs.com/package/use-react-summary",
    },
    {
      imgPath: reactGFG,
      title: "React-GFG",
      description: "Collection of components for showcasing your Geek for Geeks profile in your portfolio ✨. Built with React and CSS.",
      ghLink: "https://github.com/BamaCharanChhandogi/react-gfg",
      demoLink: "https://www.npmjs.com/package/react-gfg",
    },
    {
      imgPath: useraectgfg,
      title: "Use React GFG",
      description: "A tiny fully customizable react hook which gives you full profile details of Geeks for Geeks coder.",
      ghLink: "https://github.com/BamaCharanChhandogi/use-react-gfg",
      demoLink: "https://www.npmjs.com/package/use-react-gfg",
    },
    {
      imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AdkMFKWK8Vj12QiSMx-_VwN_8IM5PczNlw&s",
      title: "Schema Versioner",
      description: "Schema Versioner is a powerful package for Node.js applications that automates database schema versioning, migrations, and backwards compatibility for MongoDB. It simplifies the maintenance of evolving schemas and ensures seamless compatibility between different versions of your application.",
      ghLink: "https://github.com/BamaCharanChhandogi/schema-versioner",
      demoLink: "https://www.npmjs.com/package/schema-versioner",
    },
  ];
  const MLproject=[
    {
      imgPath: DiabetesPred,
      title: "Diabetes-Prediction",
      description: "Welcome to our Diabetes Prediction Website! Our platform offers a unique opportunity for users to gain insights into their potential risk of developing diabetes by leveraging predictive analytics and visualization techniques.",
      ghLink: "https://github.com/BamaCharanChhandogi/Diabetes-Prediction",
      demoLink: "https://diabetes-prediction-gamma.vercel.app/",
    },
  ];
  // You can add BOT and VS Code Extension sections here when you have projects for them

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <Col md={4} className="project-card" key={index}>
        <ProjectCard
          imgPath={project.imgPath}
          isBlog={false}
          title={project.title}
          description={project.description}
          ghLink={project.ghLink}
          demoLink={project.demoLink}
        />
      </Col>
    ));
  };

  const ProjectSection = ({ title, projects }) => (
    <div className="project-section-container">
      <h2 className="project-subheading">{title}</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {renderProjects(projects)}
      </Row>
    </div>
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1> */}
        
        <ProjectSection title="Web Projects" projects={webProjects} />
        <ProjectSection title="Machine Learning Projects" projects={MLproject} />
        <ProjectSection title="BOT Projects" projects={botProjects} />
        <ProjectSection title="VS Code Extensions" projects={vsCodeExtensions} />
        <ProjectSection title="JavaScript NPM Packages" projects={NPMProjects} />
        <ProjectSection title="Simple Projects" projects={simpleProjects} />
      </Container>
    </Container>
  );
}

export default Projects;