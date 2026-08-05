import Link from "next/link";

type WorkRowProps = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  featured?: boolean;
};

export function WorkRow({ index, title, description, tags, href, image, featured }: WorkRowProps) {
  return (
    <Link className="row work-row" href={href} data-image={image ?? ""} data-title={title}>
      <span className="no">{index}</span>
      <div className="mid">
        <h3>
          {title}
          {featured ? <small>★ Featured</small> : null}
        </h3>
        <p>{description}</p>
      </div>
      <div className="tags" aria-label="Project stack">
        {tags.slice(0, 4).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <span className="go" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
