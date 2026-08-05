import type { ReactNode } from "react";

type SectionRailProps = {
  index: string;
  label: string;
  children: ReactNode;
};

export function SectionRail({ index, label, children }: SectionRailProps) {
  return (
    <section className="section-rail">
      <div className="rail-label">
        {index} / {label}
      </div>
      <div className="rail-content">{children}</div>
    </section>
  );
}
