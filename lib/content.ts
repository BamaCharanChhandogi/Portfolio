import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentRoot = path.join(process.cwd(), "content");

export type ContentKind = "blog" | "projects";

export type Frontmatter = {
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
  stack?: string[];
  tags?: string[];
  image?: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
  year?: string;
  externalUrl?: string;
  source?: "local" | "hashnode";
  bodyFormat?: "mdx" | "html";
};

export type ContentEntry = Frontmatter & {
  slug: string;
  body: string;
  readingTime: string;
};

function contentDirectory(kind: ContentKind) {
  return path.join(contentRoot, kind);
}

export function getSlugs(kind: ContentKind) {
  const directory = contentDirectory(kind);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getEntry(kind: ContentKind, slug: string): ContentEntry {
  const source = fs.readFileSync(path.join(contentDirectory(kind), `${slug}.mdx`), "utf8");
  const { content, data } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    category: data.category,
    stack: data.stack ?? [],
    tags: data.tags ?? [],
    image: data.image,
    repo: data.repo,
    demo: data.demo,
    featured: Boolean(data.featured),
    year: data.year,
    externalUrl: data.externalUrl,
    source: data.source ?? "local",
    bodyFormat: data.bodyFormat ?? "mdx",
    body: content,
    readingTime: readingTime(content).text,
  };
}

export function getEntries(kind: ContentKind) {
  return getSlugs(kind)
    .map((slug) => getEntry(kind, slug))
    .sort((a, b) => {
      const aDate = a.publishedAt ?? a.year ?? "";
      const bDate = b.publishedAt ?? b.year ?? "";
      return bDate.localeCompare(aDate);
    });
}

export function getFeaturedProjects() {
  return getEntries("projects").filter((project) => project.featured);
}

export async function getBlogEntries() {
  const remotePosts = await getHashnodePosts();

  return remotePosts.sort((a, b) => {
    const aDate = a.publishedAt ?? "";
    const bDate = b.publishedAt ?? "";
    return bDate.localeCompare(aDate);
  });
}

export async function getBlogEntry(slug: string) {
  const posts = await getBlogEntries();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getBlogSlugs() {
  const posts = await getBlogEntries();
  return posts.map((post) => post.slug);
}

export function getAllTags() {
  const tags = new Set<string>();

  getEntries("blog").forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

type HashnodePostNode = {
  id: string;
  slug: string;
  title: string;
  brief?: string | null;
  url?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
  readTimeInMinutes?: number | null;
  tags?: Array<{ name: string; slug: string }>;
  coverImage?: { url?: string | null } | null;
  content?: { markdown?: string | null } | null;
};

type HashnodePostsResponse = {
  data?: {
    publication?: {
      posts?: {
        edges?: Array<{ node: HashnodePostNode }>;
        pageInfo?: {
          hasNextPage: boolean;
          endCursor?: string | null;
        };
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
};

const hashnodeEndpoint = "https://gql.hashnode.com";
const hashnodePublicationHost = process.env.HASHNODE_PUBLICATION_HOST ?? "bamacharan.hashnode.dev";
const hashnodeRssUrl = process.env.HASHNODE_RSS_URL ?? `https://${hashnodePublicationHost}/rss.xml`;

async function getHashnodePosts(): Promise<ContentEntry[]> {
  const token = process.env.HASHNODE_TOKEN;

  if (!token) {
    return getHashnodeRssPosts();
  }

  const posts: ContentEntry[] = [];
  let after: string | null = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await fetch(hashnodeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        query: `
          query PublicationPosts($host: String!, $first: Int!, $after: String) {
            publication(host: $host) {
              posts(first: $first, after: $after) {
                edges {
                  node {
                    id
                    slug
                    title
                    brief
                    url
                    publishedAt
                    updatedAt
                    readTimeInMinutes
                    tags {
                      name
                      slug
                    }
                    coverImage {
                      url
                    }
                    content {
                      markdown
                    }
                  }
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          }
        `,
        variables: {
          host: hashnodePublicationHost,
          first: 20,
          after,
        },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`Hashnode API returned ${response.status}`);
      return getHashnodeRssPosts();
    }

    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return getHashnodeRssPosts();
    }

    const payload = (await response.json()) as HashnodePostsResponse;

    if (payload.errors?.length) {
      console.warn(`Hashnode API error: ${payload.errors.map((error) => error.message).join("; ")}`);
      return getHashnodeRssPosts();
    }

    const connection = payload.data?.publication?.posts;
    const edges = connection?.edges ?? [];

    posts.push(...edges.map(hashnodePostToEntry));

    hasNextPage = Boolean(connection?.pageInfo?.hasNextPage);
    after = connection?.pageInfo?.endCursor ?? null;

    if (!after) {
      hasNextPage = false;
    }
  }

  return posts;
}

function hashnodePostToEntry({ node }: { node: HashnodePostNode }): ContentEntry {
  const body = node.content?.markdown ?? node.brief ?? "";
  const minutes = node.readTimeInMinutes ? `${node.readTimeInMinutes} min read` : readingTime(body).text;

  return {
    slug: node.slug,
    title: node.title,
    description: node.brief ?? "",
    publishedAt: node.publishedAt ?? undefined,
    updatedAt: node.updatedAt ?? undefined,
    tags: node.tags?.map((tag) => tag.name) ?? [],
    image: node.coverImage?.url ?? undefined,
    externalUrl: node.url ?? undefined,
    source: "hashnode",
    bodyFormat: "mdx",
    body,
    readingTime: minutes,
  };
}

async function getHashnodeRssPosts(): Promise<ContentEntry[]> {
  try {
    const response = await fetch(hashnodeRssUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`Hashnode RSS returned ${response.status}`);
      return [];
    }

    const xml = await response.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    return items.map(rssItemToEntry).filter(Boolean) as ContentEntry[];
  } catch (error) {
    console.warn("Hashnode RSS fetch failed", error);
    return [];
  }
}

function rssItemToEntry(item: string): ContentEntry | null {
  const title = getXmlText(item, "title");
  const link = getXmlText(item, "link");

  if (!title || !link) {
    return null;
  }

  const body = getXmlText(item, "content:encoded") || getXmlText(item, "description") || "";
  const textBody = stripHtml(body);
  const publishedAt = getXmlText(item, "pubDate");
  const categories = [...item.matchAll(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g)].map((match) =>
    decodeXml(match[1].trim())
  );

  return {
    slug: slugFromUrl(link) ?? slugify(title),
    title,
    description: stripHtml(getXmlText(item, "description") ?? "").trim(),
    publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,
    tags: categories,
    image: getEnclosureUrl(item),
    externalUrl: link,
    source: "hashnode",
    bodyFormat: "html",
    body,
    readingTime: readingTime(textBody).text,
  };
}

function getXmlText(xml: string, tagName: string) {
  const escapedTag = tagName.replace(":", "\\:");
  const match = xml.match(new RegExp(`<${escapedTag}[^>]*>([\\s\\S]*?)<\\/${escapedTag}>`));

  if (!match) {
    return undefined;
  }

  return decodeXml(match[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim());
}

function getEnclosureUrl(xml: string) {
  const match = xml.match(/<enclosure[^>]+url="([^"]+)"/);
  return match?.[1] ? decodeXml(match[1]) : undefined;
}

function slugFromUrl(value: string) {
  try {
    const url = new URL(value);
    return url.pathname.split("/").filter(Boolean).at(-1);
  } catch {
    return undefined;
  }
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
}

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
