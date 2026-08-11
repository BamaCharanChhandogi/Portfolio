import type { MetadataRoute } from "next";
import { getBlogEntries, getEntries } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/about", "/projects", "/blog", "/journey", "/resume"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getEntries("projects").map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = (await getBlogEntries()).map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt ?? new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
