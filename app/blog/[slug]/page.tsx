import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Linkedin, Twitter } from "lucide-react";
import { ArticleToc } from "@/components/article-toc";
import { MdxContent } from "@/components/mdx-content";
import { getBlogEntry, getBlogSlugs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogEntry(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogEntry(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    image: absoluteUrl(post.image),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <article className="article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <div className="article-intro-grid">
          <Link className="text-link back-link" href="/blog">
            <ArrowLeft size={16} /> All writing
          </Link>
          <header className="article-header">
            <p className="label">
              {formatDate(post.publishedAt)} · {post.readingTime}
            </p>
            <h1>{post.title}</h1>
            <p className="article-lede">{post.description}</p>
          </header>

          {post.image ? (
            <div className="article-image">
              <Image src={post.image} alt="" fill sizes="(max-width: 1080px) 100vw, 1008px" priority />
            </div>
          ) : null}
        </div>

        <div className="article-grid">
          <div className="article-content">
            {post.bodyFormat === "html" ? (
              <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
            ) : (
              <MdxContent source={post.body} />
            )}

            {post.tags && post.tags.length > 0 ? (
              <div className="tag-row">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            ) : null}

            <aside className="next-link">
              <div className="author-block">
                <Image src="/images/profile.jpg" alt="" width={64} height={64} />
                <div>
                  <p className="label">Written by</p>
                  <h2>{siteConfig.name}</h2>
                  <p>Full Stack Engineer building cloud integrations, AI workflows, and developer tools.</p>
                  <div className="social-links">
                    <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                    <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                    <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" aria-label="X">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <ArticleToc />
        </div>
      </div>
    </article>
  );
}

function absoluteUrl(value?: string) {
  if (!value) {
    return undefined;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${siteConfig.url}${value}`;
}

function formatDate(value?: string) {
  if (!value) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
