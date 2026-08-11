import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "A professional timeline of the schools, projects, teams, open-source work, and product milestones that shaped Bama Charan Chhandogi's work.",
  alternates: {
    canonical: "/journey",
  },
};

const chapters = [
  {
    period: "2018 - 2022",
    label: "School",
    title: "Early curiosity, computers, and small wins",
    description:
      "The foundation years: learning how technology works, building confidence with computers, and collecting the first proof that I wanted to build software seriously.",
    image: "/images/profile.jpg",
    imageAlt: "Bama Charan Chhandogi profile portrait",
    moments: ["Computer fundamentals", "Early web experiments", "Problem solving"],
  },
  {
    period: "2022 - 2026",
    label: "College",
    title: "Computer science, projects, and public learning",
    description:
      "At Chitkara University I moved from learning syntax to shipping real projects, writing publicly, and using every assignment or side project as a reason to build something useful.",
    image: "/projects/Diabetes.png",
    imageAlt: "Diabetes prediction project interface",
    moments: ["BE Computer Science", "ML and full-stack projects", "Technical writing"],
  },
  {
    period: "2023 - Present",
    label: "Open Source",
    title: "Maintaining, reviewing, and learning with developers",
    description:
      "Open-source work made the portfolio more than personal projects: reviewing pull requests, mentoring contributors, and learning how real collaboration works at scale.",
    image: "/projects/github.png",
    imageAlt: "GitHub project preview",
    moments: ["The Algorithms", "GSSoC mentor", "Contributor reviews"],
  },
  {
    period: "2024 - 2025",
    label: "Ikarus 3D",
    title: "Production 3D work and serverless systems",
    description:
      "Worked on 3D configurators, image viewers, AWS Lambda APIs, and production frontend experiences where performance and user-facing details mattered every day.",
    image: "/projects/Productlanding.png",
    imageAlt: "Product landing project preview",
    moments: ["Three.js", "AWS Lambda", "Production UI"],
  },
  {
    period: "2025 - Present",
    label: "ClipWise",
    title: "Platform integrations and AI video workflows",
    description:
      "Currently building Shopify, GoHighLevel, and AI video workflow systems that connect product, infrastructure, authentication, webhooks, and developer tooling.",
    image: "/projects/Blogcaster.png",
    imageAlt: "Blog automation workflow preview",
    moments: ["Shopify apps", "OAuth and webhooks", "AI video tooling"],
  },
];

export default function JourneyPage() {
  return (
    <section className="page-section journey-page">
      <div className="wrap">
        <div className="page-heading journey-heading">
          <p className="label">Visual archive</p>
          <h1>Journey timeline</h1>
          <p>
            A curated record of the places, projects, teams, and milestones that shaped how I build.
            Add real photos here over time; keep the story professional and useful.
          </p>
        </div>

        <div className="journey-stats" aria-label="Journey summary">
          <div>
            <span>05</span>
            <p>Chapters</p>
          </div>
          <div>
            <span>2022</span>
            <p>CS start</p>
          </div>
          <div>
            <span>Now</span>
            <p>ClipWise</p>
          </div>
        </div>

        <div className="journey-timeline">
          {chapters.map((chapter, index) => (
            <article className="journey-card" key={`${chapter.period}-${chapter.label}`}>
              <div className="journey-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="journey-copy">
                <p className="timeline-meta">{chapter.period}</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.description}</p>
                <div className="tag-row" aria-label={`${chapter.label} highlights`}>
                  {chapter.moments.map((moment) => (
                    <span key={moment}>{moment}</span>
                  ))}
                </div>
              </div>
              <div className="journey-photo">
                <Image
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  fill
                  sizes="(max-width: 720px) 100vw, 360px"
                />
                <span>{chapter.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
