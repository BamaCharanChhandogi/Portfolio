import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionRail } from "@/components/section-rail";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Bama Charan Chhandogi, a Full Stack Engineer working on ClipWise platform integrations, cloud systems, developer tools, and open source.",
};

const facts = [
  ["Based in", "Kolkata, India"],
  ["Currently", "Full Stack Engineer · ClipWise"],
  ["Focus", "AI video workflows · cloud integrations · developer tools"],
  ["Open source", "The Algorithms · GSSoC · 3,000+ developers using tools"],
];

const experience = [
  {
    title: "Full Stack Engineer",
    place: "ClipWise",
    period: "Mar 2025 — Present",
    current: true,
    description:
      "Built and launched Shopify and GoHighLevel apps that let merchants and agencies generate AI-powered short-form videos directly inside their platforms; engineered authentication, webhooks, OAuth, and embedded third-party dashboard flows.",
  },
  {
    title: "Software Developer Intern",
    place: "Ikarus 3D",
    period: "Mar 2024 — Mar 2025",
    current: false,
    description:
      "Engineered a serverless AWS backend handling 1k+ API requests per day with about 400ms latency; shipped 3+ production 3D product configurators with Three.js, React, and TypeScript, plus a 360-degree image viewer with shareable embed links.",
  },
  {
    title: "Maintainer",
    place: "The Algorithms",
    period: "Sep 2023 — Present",
    current: true,
    description:
      "Reviewing and merging pull requests while collaborating with global developers to improve and expand open-source algorithm repositories.",
  },
  {
    title: "Project Admin & Mentor",
    place: "GirlScript Summer of Code",
    period: "May 2024 — Aug 2024",
    current: false,
    description:
      "Led 30+ contributors on the Diabetes Prediction project, established coding standards, drove 60+ merged pull requests, improved model accuracy by 15%, and added testing plus responsive UI work.",
  },
];

const education = [
  {
    period: "Jul 2022 — Jun 2026",
    title: "BE Computer Science",
    place: "Chitkara University",
    detail: "CGPA 8.44",
  },
];

const toolstack = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL"],
  "Web & APIs": ["React.js", "Node.js", "Express.js", "REST APIs", "Protocol-based APIs", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["Tailwind CSS", "Bootstrap", "Redux"],
  "Cloud & Serverless": ["Cloudflare Workers", "Durable Objects", "AWS Lambda", "Docker", "Firebase", "Linux", "CI/CD"],
  Databases: ["MongoDB", "PostgreSQL", "DynamoDB", "MySQL", "Redis"],
  "Developer & Platform Tools": ["Git", "GitHub", "VS Code", "Cursor", "Antigravity", "Postman", "Figma"],
};

const elsewhere = [
  ["GitHub", siteConfig.socials.github],
  ["LinkedIn", siteConfig.socials.linkedin],
  ["X", siteConfig.socials.twitter],
  ["Hashnode", siteConfig.socials.blog],
];

export default function AboutPage() {
  return (
    <div className="page-section">
      <div className="wrap about-spine">
        <SectionRail index="01" label="About">
          <div className="page-heading rail-heading">
            <h1>Full Stack Engineer at ClipWise.</h1>
          </div>
          <div className="about-intro-grid">
            <div className="portrait">
              <Image
                src="/images/about-portrait.png"
                alt="Bama Charan Chhandogi"
                fill
                sizes="(max-width: 860px) 100vw, 360px"
              />
            </div>
            <div className="bio-copy">
              <p>
                I am Bama Charan Chhandogi, a Full Stack Engineer focused on cloud integrations,
                AI video workflows, developer tooling, and production web systems.
              </p>
              <p>
                At ClipWise, I build Shopify and GoHighLevel integrations that bring AI-powered short-form
                video generation directly into merchant and agency workflows.
              </p>
              <p>
                Before that, I worked on production 3D configurators at Ikarus 3D and contributed to
                open-source communities through The Algorithms and GirlScript Summer of Code.
              </p>
              <div className="facts-ledger">
                {facts.map(([label, value]) => (
                  <p key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </p>
                ))}
              </div>
              <Link className="btn p" href={siteConfig.socials.email}>
                Contact me ↗
              </Link>
            </div>
          </div>
        </SectionRail>

        <SectionRail index="02" label="Experience">
          <DotLedger items={experience} />
        </SectionRail>

        <SectionRail index="03" label="Education">
          <div className="education-ledger">
            {education.map((item) => (
              <article key={`${item.period}-${item.title}`}>
                <p className="timeline-meta">{item.period}</p>
                <h3>
                  {item.title} · {item.place}
                </h3>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </SectionRail>

        <SectionRail index="04" label="Toolstack">
          <div className="tool-table">
            {Object.entries(toolstack).map(([group, tools]) => (
              <div key={group}>
                <span>{group}</span>
                <p>{tools.join(" · ")}</p>
              </div>
            ))}
          </div>
        </SectionRail>

        <SectionRail index="05" label="Elsewhere">
          <div className="elsewhere-ledger">
            {elsewhere.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <span>{label}</span>
                <strong>↗</strong>
              </a>
            ))}
          </div>
        </SectionRail>
      </div>
    </div>
  );
}

type DotLedgerItem = {
  title: string;
  place: string;
  period: string;
  current: boolean;
  description: string;
};

function DotLedger({ items }: { items: DotLedgerItem[] }) {
  return (
    <div className="dot-ledger">
      {items.map((item) => (
        <article className={`dot-ledger-item ${item.current ? "current" : ""}`} key={`${item.title}-${item.period}`}>
          <span className="career-dot" aria-hidden="true" />
          <div>
            <p className="timeline-meta">
              {item.period}
              {item.current ? <span> → Currently</span> : null}
            </p>
            <h3>
              {item.title} · {item.place}
            </h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
