import Link from "next/link";

type SectionHeadProps = {
  idx: string;
  title: string;
  seeAll?: {
    href: string;
    label: string;
  };
};

export function SectionHead({ idx, title, seeAll }: SectionHeadProps) {
  return (
    <div className="sec-head">
      <h2>
        <span className="idx">{idx} / </span>
        {title}
      </h2>
      {seeAll ? (
        <Link className="seeall" href={seeAll.href}>
          {seeAll.label} ↗
        </Link>
      ) : null}
    </div>
  );
}
