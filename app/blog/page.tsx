import type { Metadata } from "next";
import Link from "next/link";
import { BlogFeedRow } from "@/components/blog-feed-row";
import { FilterBar } from "@/components/filter-bar";
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
  searchParams: Promise<{ page?: string; tag?: string }>;
};

const postsPerPage = 8;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page, tag } = await searchParams;
  const posts = await getBlogEntries();
  const filteredPosts = filterPosts(posts, tag);
  const tags = getBlogTags(posts);
  const currentPage = Math.max(1, Number(page) || 1);
  const visibleCount = currentPage * postsPerPage;
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

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

        <div className="post-list blog-feed-list">
          {visiblePosts.map((post, index) => (
            <BlogFeedRow key={post.slug} post={post} featured={index === 0} />
          ))}
        </div>

        {hasMore ? (
          <div className="feed-more">
            <Link className="load-more" href={blogPageHref(tag, currentPage + 1)}>
              Load more <span aria-hidden="true">↓</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function blogPageHref(tag: string | undefined, page: number) {
  const params = new URLSearchParams();

  if (tag) {
    params.set("tag", tag);
  }

  params.set("page", String(page));

  return `/blog?${params.toString()}`;
}
