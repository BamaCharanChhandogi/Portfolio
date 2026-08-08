import Link from "next/link";
import type { ContentEntry } from "@/lib/content";

type BlogFeedRowProps = {
  post: ContentEntry;
  featured?: boolean;
};

export function BlogFeedRow({ post, featured }: BlogFeedRowProps) {
  const primaryTag = post.tags?.[0];

  return (
    <Link className={`blog-feed-row ${featured ? "featured" : ""}`} href={`/blog/${post.slug}`}>
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>

      <span className="blog-feed-copy">
        <span className="blog-feed-meta">
          <span>{sourceLabel(post.source)}</span>
          {primaryTag ? <span>{primaryTag}</span> : null}
          <span>{post.readingTime}</span>
        </span>
        <strong>{post.title}</strong>
        {post.description ? <em>{post.description}</em> : null}
      </span>

      {post.image ? (
        <span className="blog-feed-media" aria-hidden="true">
          <img src={post.image} alt="" loading="lazy" decoding="async" />
        </span>
      ) : null}
    </Link>
  );
}

function sourceLabel(source?: ContentEntry["source"]) {
  if (source === "hashnode") {
    return "Hashnode";
  }

  return "Bamacharan.com";
}

function formatDate(value?: string) {
  if (!value) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}
