import type { Metadata } from "next";
import Link from "next/link";
import { FilterBar } from "@/components/filter-bar";
import { WorkList } from "@/components/work-list";
import { WorkRow } from "@/components/work-row";
import { filterProjects, projectCategories, projectCountBy } from "@/lib/categories";
import { getEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Bama Charan Chhandogi across AI video tooling, cloud systems, full-stack apps, developer tools, and open source.",
  alternates: {
    canonical: "/projects",
  },
};

type ProjectsPageProps = {
  searchParams: Promise<{ type?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { type } = await searchParams;
  const projects = getEntries("projects");
  const filteredProjects = filterProjects(projects, type);
  const counts = projectCountBy(projects);
  const filters = [
    { href: "/projects", label: "All", count: projects.length, active: !type },
    ...projectCategories.map((category) => ({
      href: `/projects?type=${category.slug}`,
      label: category.label,
      count: counts[category.slug],
      active: type === category.slug,
    })),
  ];

  return (
    <section className="page-section">
      <div className="wrap">
        <div className="page-heading">
          <p className="label">Selected work</p>
          <h1>Things I&apos;ve built</h1>
          <p>
            Cloud systems, full-stack products, developer tools, platform integrations, and open-source work
            collected as searchable project pages.
          </p>
        </div>

        <FilterBar items={filters} />

        {filteredProjects.length > 0 ? (
          <WorkList>
            {filteredProjects.map((project, index) => (
              <WorkRow
                key={project.slug}
                index={String(index + 1).padStart(3, "0")}
                title={project.title}
                description={project.description}
                tags={project.stack ?? []}
                href={`/projects/${project.slug}`}
                image={project.image}
                featured={project.featured}
              />
            ))}
          </WorkList>
        ) : (
          <p className="empty-state">
            Nothing here yet — <Link className="text-link" href="/projects">try all projects</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
