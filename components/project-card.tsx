import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentEntry } from "@/lib/content";

type ProjectCardProps = {
  project: ContentEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.image ? (
        <Link className="project-image" href={`/projects/${project.slug}`} aria-label={project.title}>
          <Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
        </Link>
      ) : null}
      <div className="card-copy">
        <div className="card-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Read case note <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
