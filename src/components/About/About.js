import React from "react";
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
// eslint-disable-next-line no-unused-vars
import Aboutcard from "./AboutCard";
// eslint-disable-next-line no-unused-vars
import myimg from "../../Assets/IMG_20220705_183813.jpg";
import Toolstack from "./Toolstack";
import Education from "./Education";
import Experience from "./Experienced";
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">
              My Journey & <span className="purple">Professional Growth</span>
            </h1>
            <p className="page-subtitle">
              A comprehensive overview of my educational background and professional experiences
            </p>
          </div>

          <div className="main-content">
            <div className="content-column">
              <Education />
            </div>
            <div className="content-column">
              <Experience />
            </div>
          </div>

          {/* Skills Section Placeholder */}
          <div className="skills-section">
            <h2 className="section-heading">
              Professional <span className="purple">Skillset</span>
            </h2>
            <div className="skills-placeholder">
              <Techstack />
            </div>
          </div>

          <div className="tools-section">
            <h2 className="section-heading">
              <span className="purple">Tools</span> I Use
            </h2>
            <div className="tools-placeholder">
              <Toolstack />
            </div>
          </div>

          <div className="github-section">
            <div className="github-placeholder">
               <Github />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-page {
          min-height: 100vh;
          font-family: 'Arial', sans-serif;
        }

        .about-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
          padding: 2rem 0;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .purple {
          color: #c770f0;
        }

        .main-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .content-column {
          display: flex;
          flex-direction: column;
        }

        .section-container {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          height: 100%;
          transition: all 0.3s ease;
        }

        .section-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(199,112,240,0.3);
        }

        .section-icon {
          color: #c770f0;
          margin-right: 1rem;
        }

        .section-title {
          color: #fff;
          font-size: 2rem;
          font-weight: 600;
          margin: 0;
        }

        .timeline-container {
          position: relative;
        }

        .timeline-item {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 2rem;
          border-left: 2px solid rgba(199,112,240,0.3);
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -8px;
          top: 0;
          width: 14px;
          height: 14px;
          background: #c770f0;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.2);
          box-shadow: 0 0 0 4px rgba(199,112,240,0.2);
        }

        .timeline-content {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          background: rgba(255,255,255,0.1);
        }

        .timeline-title {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .timeline-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .timeline-institution,
        .timeline-duration {
          display: flex;
          align-items: center;
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          gap: 0.5rem;
        }

        .timeline-description {
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
        }

        .skills-section,
        .tools-section,
        .github-section {
          margin-top: 4rem;
          text-align: center;
        }

        .section-heading {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .skills-placeholder,
        .tools-placeholder,
        .github-placeholder {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.8);
          font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .main-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .page-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }
          
          .page-subtitle {
            font-size: 1rem;
          }
          
          .section-container {
            padding: 1.5rem;
          }
          
          .timeline-meta {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .timeline-institution,
          .timeline-duration {
            font-size: 0.85rem;
          }

          .section-heading {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .about-section {
            padding: 1rem 0;
          }
          
          .page-header {
            margin-bottom: 2rem;
            padding: 1rem 0;
          }
          
          .section-container {
            padding: 1rem;
          }
          
          .timeline-item {
            padding-left: 1.5rem;
          }
          
          .timeline-content {
            padding: 1rem;
          }

          .page-title {
            font-size: 1.8rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .section-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
