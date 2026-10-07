import type { Metadata } from "next";
import Link from "next/link";
import { FilterBar } from "@/components/filter-bar";
import { WorkList } from "@/components/work-list";
import { WorkRow } from "@/components/work-row";
import {
  filterProjects,
  projectCategories,
  projectCountBy,
  stackCountBy,
  techStackFilters,
} from "@/lib/categories";
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
  searchParams: Promise<{ type?: string; stack?: string }>;
};

function buildFilterUrl(type?: string, stack?: string) {
  const params = new URLSearchParams();
  if (type) params.set("type", type);
  if (stack) params.set("stack", stack);
  const qs = params.toString();
  return qs ? `/projects?${qs}` : "/projects";
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { type, stack } = await searchParams;
  const projects = getEntries("projects");
  const filteredProjects = filterProjects(projects, type, stack);
  const counts = projectCountBy(projects);
  const stackCounts = stackCountBy(projects);

  const filters = [
    { href: buildFilterUrl(undefined, stack), label: "All", count: projects.length, active: !type },
    ...projectCategories.map((category) => ({
      href: buildFilterUrl(category.slug, stack),
      label: category.label,
      count: counts[category.slug] ?? 0,
      active: type === category.slug,
    })),
  ];

  const hasActiveFilters = Boolean(type || stack);
  const activeCategory = projectCategories.find((c) => c.slug === type);
  const activeStack = techStackFilters.find((s) => s.slug === stack);

  // Group by Flagship vs Others when on the default "All" view
  const flagshipProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section className="page-section">
      <div className="wrap">
        <div className="page-heading">
          <p className="label">Selected work</p>
          <h1>Things I&apos;ve built</h1>
          <p>
            Systems, AI developer tools, full-stack applications, and open-source packages.
            Filter by domain or tech stack below.
          </p>
        </div>

        {/* Category Filter */}
        <FilterBar items={filters} />

        {/* Tech Stack Pills */}
        <div className="stack-filter-bar">
          <span className="stack-filter-label">Tech Stack:</span>
          <div className="stack-filter-scroll">
            <Link
              href={buildFilterUrl(type, undefined)}
              className={`stack-pill ${!stack ? "active" : ""}`}
            >
              All Stacks
            </Link>
            {techStackFilters.map((s) => (
              <Link
                key={s.slug}
                href={buildFilterUrl(type, s.slug)}
                className={`stack-pill ${stack === s.slug ? "active" : ""}`}
              >
                {s.label} <span className="pill-count">{stackCounts[s.slug] ?? 0}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Active Filter Indicator */}
        {hasActiveFilters && (
          <div className="active-filter-indicator">
            <span>
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
              {activeCategory ? ` in ${activeCategory.label}` : ""}
              {activeStack ? ` using ${activeStack.label}` : ""}
            </span>
            <Link href="/projects" className="clear-filter-link">
              Clear filters ✕
            </Link>
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <>
            {!hasActiveFilters ? (
              <>
                <div className="projects-section-label">
                  <span>01 / Featured Projects</span>
                  <span>{flagshipProjects.length} Projects</span>
                </div>
                <WorkList>
                  {flagshipProjects.map((project, index) => (
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

                <div className="projects-section-label" style={{ marginTop: "48px" }}>
                  <span>02 / Other Projects & Experiments</span>
                  <span>{otherProjects.length} Projects</span>
                </div>
                <WorkList>
                  {otherProjects.map((project, index) => (
                    <WorkRow
                      key={project.slug}
                      index={String(flagshipProjects.length + index + 1).padStart(3, "0")}
                      title={project.title}
                      description={project.description}
                      tags={project.stack ?? []}
                      href={`/projects/${project.slug}`}
                      image={project.image}
                      featured={project.featured}
                    />
                  ))}
                </WorkList>
              </>
            ) : (
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
            )}
          </>
        ) : (
          <p className="empty-state">
            No projects matched this filter — <Link className="text-link" href="/projects">clear filters</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
