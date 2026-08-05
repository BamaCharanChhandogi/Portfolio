import Link from "next/link";

export type FilterItem = {
  href: string;
  label: string;
  count: number;
  active: boolean;
};

type FilterBarProps = {
  items: FilterItem[];
  trailing?: {
    href: string;
    label: string;
  };
};

export function FilterBar({ items, trailing }: FilterBarProps) {
  return (
    <nav className="filter-bar" aria-label="Content filters">
      <div className="filter-scroll">
        {items.map((item) => (
          <Link key={item.href} className={item.active ? "active" : ""} href={item.href}>
            {item.label} <sup>{item.count}</sup>
          </Link>
        ))}
      </div>
      {trailing ? (
        <Link className="filter-trailing" href={trailing.href}>
          {trailing.label} ↗
        </Link>
      ) : null}
    </nav>
  );
}
