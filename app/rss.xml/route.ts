import { getBlogEntries } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const posts = await getBlogEntries();
  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.description}]]></description>
          <link>${siteConfig.url}/blog/${post.slug}</link>
          <guid>${siteConfig.url}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.publishedAt ?? Date.now()).toUTCString()}</pubDate>
        </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${siteConfig.name}</title>
        <description>${siteConfig.description}</description>
        <link>${siteConfig.url}</link>
        ${items}
      </channel>
    </rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
