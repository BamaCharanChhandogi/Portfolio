import Link from "next/link";
import type { ContentEntry } from "@/lib/content";

type PostRowProps = {
  post: ContentEntry;
  showTag?: boolean;
  featured?: boolean;
};

export function PostRow({ post, showTag, featured }: PostRowProps) {
  return (
    <Link className={`post-row ${featured ? "featured" : ""}`} href={`/blog/${post.slug}`}>
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      <span>
        <strong>
          {post.title}
          {showTag && post.tags?.[0] ? <b>{post.tags[0]}</b> : null}
        </strong>
        <em>{post.description}</em>
      </span>
      <small>{post.readingTime}</small>
    </Link>
  );
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
