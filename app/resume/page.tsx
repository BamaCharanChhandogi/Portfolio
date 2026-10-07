import type { Metadata } from "next";
import { Download } from "lucide-react";
import { WorkRow } from "@/components/work-row";
import { getFeaturedProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Resume and profile summary for Bama Charan Chhandogi, Full Stack Developer focused on cloud and open source.",
};

const experience = [
  {
    role: "Full Stack Engineer",
    company: "ClipWise",
    period: "Sep 2025 — Sep 2026",
    detail:
      "Built and launched Shopify and GoHighLevel apps enabling merchants and agencies to generate AI-powered short-form videos directly from their platforms. Engineered Shopify APIs, GoHighLevel OAuth, authentication, webhook events, and embedded third-party dashboard flows.",
  },
  {
    role: "Software Developer Intern",
    company: "Ikarus 3D",
    period: "Mar 2025 — Aug 2025",
    detail:
      "Engineered a serverless AWS backend with Lambda, API Gateway, and DynamoDB handling 1k+ API requests per day with about 400ms latency. Developed 3+ production-ready 3D product configurators using Three.js, React, and TypeScript, plus a 360-degree image viewer with shareable embed links.",
  },
  {
    role: "Maintainer",
    company: "The Algorithms",
    period: "Sep 2023 — Present",
    detail:
      "Reviewing and merging pull requests while collaborating with global developers to improve and expand open-source algorithm repositories.",
  },
  {
    role: "Project Admin & Mentor",
    company: "GirlScript Summer of Code",
    period: "May 2024 — Aug 2024",
    detail:
      "Led 30+ contributors on Diabetes Prediction, established coding standards, drove 60+ merged pull requests, improved ML model accuracy by 15%, and added automated testing plus responsive UI features.",
  },
];

const education = ["BE Computer Science · Chitkara University, Punjab · CGPA 8.44 · 2022 — 2026"];

const toolstack = {
  "Programming Languages": "JavaScript · TypeScript · Python · Java · C++ · C · SQL",
  "Web & API Development": "React.js · Node.js · Express.js · REST APIs · Protocol-based APIs · HTML5 · CSS3",
  "Frameworks & Libraries": "Tailwind CSS · Bootstrap · Redux",
  "Cloud & Serverless": "Cloudflare Workers · Durable Objects · AWS Lambda · Docker · Firebase · Linux · CI/CD Pipelines",
  Databases: "MongoDB · PostgreSQL · DynamoDB · MySQL · Redis",
  "Developer & Platform Tools": "Git · GitHub · VS Code · Cursor · Antigravity · Postman · Figma",
};

const certifications = [
  "The Complete Web Development · Udemy",
  "Google Cloud Generative AI Certification · 24 skill badges across all levels · Google",
];

const achievements = [
  "3,000+ developers actively using open-source developer tools across VS Code extensions and NPM packages",
  "Best Full Stack Project Award · Chitkara University · 2024",
  "Ranked Top 10 · Innogeeks Open Source Program",
  "Hacktoberfest · University Rank 3",
];

export default function ResumePage() {
  const projects = getFeaturedProjects().slice(0, 3);

  return (
    <section className="page-section">
      <div className="wrap">
        <div className="resume-heading">
          <div className="page-heading">
            <p className="label">Résumé</p>
            <h1>Full Stack Developer · Cloud & Open Source.</h1>
            <p>Structured web resume with a downloadable PDF for sharing.</p>
            <div className="resume-contact" aria-label="Resume contact links">
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={siteConfig.socials.email}>
                {siteConfig.email}
              </a>
            </div>
          </div>
          <a className="btn p" href="/files/resume.pdf" download>
            Download PDF <Download size={17} />
          </a>
        </div>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="dot-ledger compact">
            {experience.map((item) => (
              <article className="dot-ledger-item" key={`${item.role}-${item.company}`}>
                <span className="career-dot" aria-hidden="true" />
                <div>
                  <p className="timeline-meta">{item.period}</p>
                  <h3>
                    {item.role} · {item.company}
                  </h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <ul className="resume-lines">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <div className="tool-table">
            {Object.entries(toolstack).map(([group, tools]) => (
              <div key={group}>
                <span>{group}</span>
                <p>{tools}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Selected projects</h2>
          <div className="row-list no-preview">
            {projects.map((project, index) => (
              <WorkRow
                key={project.slug}
                index={String(index + 1).padStart(3, "0")}
                title={project.title}
                description={project.description}
                tags={project.stack ?? []}
                href={`/projects/${project.slug}`}
                featured={project.featured}
              />
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Certifications</h2>
          <ul className="resume-lines">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Achievements</h2>
          <ul className="resume-lines">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
