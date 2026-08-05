import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { BrowserFrame } from "@/components/browser-frame";
import { MdxContent } from "@/components/mdx-content";
import { labelForCategory } from "@/lib/categories";
import { getEntries, getEntry, getSlugs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = getEntry("projects", slug);
    return {
      title: project.title,
      description: project.description,
      alternates: {
        canonical: `/projects/${project.slug}`,
      },
      openGraph: {
        title: project.title,
        description: project.description,
        url: `${siteConfig.url}/projects/${project.slug}`,
        images: project.image ? [project.image] : [],
      },
    };
  } catch {
    return {};
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = safeGetProject(slug);

  if (!project) {
    notFound();
  }

  const projects = getEntries("projects").sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  const currentIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const categoryLabel = labelForCategory(project);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    image: project.image ? `${siteConfig.url}${project.image}` : undefined,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <article className="article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <Link className="text-link back-link" href="/projects">
          <ArrowLeft size={16} /> Back to projects
        </Link>
        <div className="project-case">
          <aside className="project-sidebar">
            <p className="label">
              {project.year} · {categoryLabel}
            </p>
            {project.stack && project.stack.length > 0 ? (
              <div className="stack-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
            <div className="article-actions">
              {project.demo ? (
                <a className="btn p" href={project.demo} target="_blank" rel="noreferrer">
                  Live demo <ExternalLink size={17} />
                </a>
              ) : null}
              {project.repo ? (
                <a className="btn s" href={project.repo} target="_blank" rel="noreferrer">
                  Source <Github size={17} />
                </a>
              ) : null}
            </div>
          </aside>

          <div className="project-main">
            <header className="article-header project-header">
              <h1>{project.title}</h1>
              <p className="article-lede">{project.description}</p>
            </header>

            {project.image ? (
              <BrowserFrame image={project.image} url={project.demo ?? `${siteConfig.domain}/projects/${project.slug}`} priority />
            ) : null}

            <MdxContent source={project.body} />

            {nextProject ? (
              <div className="next-link">
                <Link className="text-link" href={`/projects/${nextProject.slug}`}>
                  Next project: {nextProject.title} <ArrowRight size={16} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function safeGetProject(slug: string) {
  try {
    return getEntry("projects", slug);
  } catch {
    return null;
  }
}
