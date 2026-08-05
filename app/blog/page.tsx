import type { Metadata } from "next";
import Link from "next/link";
import { FilterBar } from "@/components/filter-bar";
import { PostRow } from "@/components/post-row";
import { filterPosts, getBlogTags } from "@/lib/categories";
import { getBlogEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing by Bama Charan Chhandogi about cloud systems, platform integrations, developer tools, AI workflows, and open source.",
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export const revalidate = 3600;

type BlogPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { tag } = await searchParams;
  const posts = await getBlogEntries();
  const filteredPosts = filterPosts(posts, tag);
  const tags = getBlogTags(posts);

  return (
    <section className="page-section">
      <div className="wrap">
        <div className="page-heading">
          <p className="label">Writing</p>
          <h1>Notes from building</h1>
          <p>
            Technical posts about cloud systems, platform integrations, developer tools, AI workflows, and lessons
            from building in public.
          </p>
        </div>

        {tags.length >= 2 ? (
          <FilterBar
            trailing={{ href: "/rss.xml", label: "RSS" }}
            items={[
              { href: "/blog", label: "All", count: posts.length, active: !tag },
              ...tags.map((item) => ({
                href: `/blog?tag=${encodeURIComponent(item)}`,
                label: item,
                count: posts.filter((post) => post.tags?.includes(item)).length,
                active: tag === item,
              })),
            ]}
          />
        ) : (
          <Link className="text-link rss-link" href="/rss.xml">
            RSS ↗
          </Link>
        )}

        <div className="post-list">
          {filteredPosts.map((post, index) => (
            <PostRow key={post.slug} post={post} showTag featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
