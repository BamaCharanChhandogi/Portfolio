import type { ContentEntry } from "@/lib/content";

export const projectCategories = [
  { slug: "web", label: "Web Apps", match: ["Web Projects"] },
  { slug: "tools", label: "Dev Tools", match: ["VS Code Extensions", "JavaScript NPM Packages"] },
  { slug: "ai", label: "AI & Bots", match: ["BOT Projects"] },
  { slug: "ml", label: "ML", match: ["Machine Learning Projects"] },
  { slug: "mini", label: "Experiments", match: ["Simple Projects"] },
] satisfies ReadonlyArray<{ slug: string; label: string; match: readonly string[] }>;

export type ProjectCategorySlug = (typeof projectCategories)[number]["slug"];

export function categoryFor(entry: ContentEntry) {
  return projectCategories.find((category) => category.match.includes(entry.category ?? "")) ?? null;
}

export function labelForCategory(entry: ContentEntry) {
  return categoryFor(entry)?.label ?? entry.category ?? "Project";
}

export function projectCountBy(entries: ContentEntry[]) {
  return projectCategories.reduce<Record<ProjectCategorySlug, number>>((counts, category) => {
    counts[category.slug] = entries.filter((entry) => categoryFor(entry)?.slug === category.slug).length;
    return counts;
  }, {} as Record<ProjectCategorySlug, number>);
}

export function filterProjects(entries: ContentEntry[], type?: string) {
  if (!type) {
    return entries;
  }

  const selected = projectCategories.find((category) => category.slug === type);

  if (!selected) {
    return [];
  }

  return entries.filter((entry) => selected.match.includes(entry.category ?? ""));
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
