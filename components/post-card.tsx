import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentEntry } from "@/lib/content";

type PostCardProps = {
  post: ContentEntry;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="card-meta">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span>{post.readingTime}</span>
      </div>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.description}</p>
      <Link className="text-link" href={`/blog/${post.slug}`}>
        Read post <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}

function formatDate(value?: string) {
  if (!value) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
