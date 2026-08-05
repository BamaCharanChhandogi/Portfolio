"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ArticleToc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>(".prose h2, .prose h3"));
    const usedIds = new Set<string>();
    const nextItems = headings
      .map((heading) => {
        const text = heading.textContent?.trim();

        if (!text) {
          return null;
        }

        const baseId = heading.id || slugify(text);
        let id = baseId;
        let count = 2;

        while (usedIds.has(id) || document.getElementById(id)?.isSameNode(heading) === false) {
          id = `${baseId}-${count}`;
          count += 1;
        }

        heading.id = id;
        usedIds.add(id);

        return {
          id,
          text,
          level: heading.tagName === "H3" ? 3 : 2,
        } satisfies TocItem;
      })
      .filter(Boolean) as TocItem[];

    setItems(nextItems);
    setActiveId(nextItems[0]?.id ?? "");

    if (nextItems.length < 2) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-96px 0px -65% 0px",
        threshold: [0, 1],
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (items.length < 2) {
    return null;
  }

  return (
    <nav className="article-toc" aria-label="On this page">
      <p>On This Page</p>
      <ol>
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "indent" : undefined}>
            <a className={activeId === item.id ? "active" : undefined} href={`#${item.id}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
