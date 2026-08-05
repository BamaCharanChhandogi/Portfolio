import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { PostRow } from "@/components/post-row";
import { SectionHead } from "@/components/section-head";
import { StatBand } from "@/components/stat-band";
import { WorkList } from "@/components/work-list";
import { WorkRow } from "@/components/work-row";
import { getBlogEntries, getFeaturedProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: "Full Stack Engineer",
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
    siteConfig.socials.instagram,
    siteConfig.socials.blog,
  ],
  knowsAbout: ["React", "TypeScript", "Node.js", "Cloudflare Workers", "AWS", "Shopify APIs", "Open Source"],
};

export const revalidate = 3600;

export default async function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);
  const posts = (await getBlogEntries()).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="hero">
        <div className="wrap">
          <div className="hero-top">
            <span className="label">Full stack engineer · cloud & open source · India</span>
            <p className="right">
              Building AI video workflows, platform integrations, developer tools, and production web systems.
            </p>
          </div>
          <h1 className="display">
            <span className="ln">
              <span>Bama Charan</span>
            </span>
            <span className="ln">
              <span>
                Chhandogi<i className="grad">.</i>
              </span>
            </span>
          </h1>
          <div className="hero-foot">
            <p className="hero-sub">
              I work across <b>React</b>, <b>TypeScript</b>, <b>Node.js</b>, <b>Cloudflare</b>, and <b>AWS</b> to
              turn complex workflows into useful products.
            </p>
            <div className="cta">
              <Link className="btn p" href="/projects">
                Explore work ↗
              </Link>
              <Link className="btn s" href="/blog">
                Read the blog
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Marquee />

      <section className="content-section">
        <div className="wrap">
          <SectionHead idx="01" title="Selected work" seeAll={{ href: "/projects", label: "See all work" }} />
          <WorkList>
            {featuredProjects.map((project, index) => (
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
        </div>
      </section>

      <StatBand />

      <section className="content-section">
        <div className="wrap">
          <SectionHead idx="02" title="Writing" seeAll={{ href: "/blog", label: "All posts" }} />
          <div className="post-list">
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} showTag />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
