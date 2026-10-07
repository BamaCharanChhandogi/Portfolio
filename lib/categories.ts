import type { ContentEntry } from "@/lib/content";

export type ProjectCategory = {
  slug: string;
  label: string;
  match: readonly string[];
};

export const projectCategories: readonly ProjectCategory[] = [
  { slug: "flagship", label: "★ Featured", match: [] },
  { slug: "ai", label: "AI & Cloud", match: ["BOT Projects", "AI & Dev Tools"] },
  { slug: "web", label: "Web Apps", match: ["Web Projects"] },
  { slug: "tools", label: "Dev Tools", match: ["VS Code Extensions", "JavaScript NPM Packages", "AI & Dev Tools"] },
  { slug: "ml", label: "ML & Data", match: ["Machine Learning Projects"] },
  { slug: "mini", label: "Experiments", match: ["Simple Projects"] },
];

export type ProjectCategorySlug = string;

export type TechStackFilter = {
  slug: string;
  label: string;
  match: readonly string[];
};

export const techStackFilters: readonly TechStackFilter[] = [
  { slug: "nextjs", label: "Next.js", match: ["Next.js", "Next.js 15"] },
  { slug: "typescript", label: "TypeScript", match: ["TypeScript"] },
  { slug: "react", label: "React", match: ["React", "React.js"] },
  { slug: "node", label: "Node.js", match: ["Node.js", "Express.js"] },
  { slug: "ai-llm", label: "AI / LLM", match: ["Gemini 3.6 Flash", "Gemini API", "Google Generative AI", "AI", "Bot"] },
  { slug: "database", label: "Postgres & DB", match: ["Neon Postgres", "MongoDB", "Drizzle ORM"] },
  { slug: "cloudflare", label: "Cloudflare", match: ["Cloudflare Workers", "Durable Objects"] },
  { slug: "python", label: "Python", match: ["Python", "Machine Learning"] },
];

export type TechStackSlug = string;

export function categoryFor(entry: ContentEntry) {
  if (entry.featured) {
    return projectCategories.find((c) => c.slug === "flagship") ?? null;
  }
  return projectCategories.find((category) => category.match.includes(entry.category ?? "")) ?? null;
}

export function labelForCategory(entry: ContentEntry) {
  return entry.category ?? "Project";
}

export function projectCountBy(entries: ContentEntry[]) {
  return projectCategories.reduce<Record<string, number>>((counts, category) => {
    if (category.slug === "flagship") {
      counts[category.slug] = entries.filter((entry) => entry.featured).length;
    } else {
      counts[category.slug] = entries.filter((entry) => category.match.includes(entry.category ?? "")).length;
    }
    return counts;
  }, {});
}

export function stackCountBy(entries: ContentEntry[]) {
  return techStackFilters.reduce<Record<string, number>>((counts, filter) => {
    counts[filter.slug] = entries.filter((entry) =>
      entry.stack?.some((s) => filter.match.some((m) => s.toLowerCase().includes(m.toLowerCase())))
    ).length;
    return counts;
  }, {});
}

export function filterProjects(entries: ContentEntry[], type?: string, stack?: string, query?: string) {
  let results = entries;

  if (type) {
    if (type === "flagship") {
      results = results.filter((entry) => entry.featured);
    } else {
      const selected = projectCategories.find((category) => category.slug === type);
      if (selected) {
        results = results.filter((entry) => selected.match.includes(entry.category ?? ""));
      }
    }
  }

  if (stack) {
    const selectedStack = techStackFilters.find((s) => s.slug === stack);
    if (selectedStack) {
      results = results.filter((entry) =>
        entry.stack?.some((s) => selectedStack.match.some((m) => s.toLowerCase().includes(m.toLowerCase())))
      );
    }
  }

  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    results = results.filter(
      (entry) =>
        entry.title.toLowerCase().includes(q) ||
        entry.description.toLowerCase().includes(q) ||
        entry.stack?.some((s) => s.toLowerCase().includes(q))
    );
  }

  return results;
}

export function getBlogTags(entries: ContentEntry[]) {
  return Array.from(new Set(entries.flatMap((entry) => entry.tags ?? []))).sort((a, b) => a.localeCompare(b));
}

export function filterPosts(entries: ContentEntry[], tag?: string) {
  if (!tag) {
    return entries;
  }

  return entries.filter((entry) => entry.tags?.includes(tag));
}
