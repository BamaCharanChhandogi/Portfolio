# bamacharan.com

Personal portfolio and blog for Bama Charan Chhandogi, a Full Stack Developer focused on cloud integrations, AI workflows, developer tools, and open source.

Built as a fast, SEO-friendly Next.js site with:

- App Router static pages
- MDX-backed projects and blog posts
- Per-page metadata
- Sitemap, robots.txt, and RSS feed
- Person and Article JSON-LD
- Light/dark editorial design system

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

Add project pages in `content/projects/*.mdx`.

Blog posts are imported from Hashnode at build/runtime:

```bash
HASHNODE_TOKEN=your_hashnode_token
HASHNODE_PUBLICATION_HOST=bamacharan.hashnode.dev
HASHNODE_RSS_URL=https://bamacharan.hashnode.dev/rss.xml
```

Project files still use frontmatter for title, description, tags, images, links, and dates.

## Build

```bash
npm run build
npm run start
```
