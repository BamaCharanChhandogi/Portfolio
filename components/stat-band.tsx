const stats = [
  { value: "3K+", label: "developers using tools" },
  { value: "1K+", label: "API requests / day" },
  { value: "3+", label: "3D configurators shipped" },
  { value: "40+", label: "open-source PRs managed" },
];

export function StatBand() {
  return (
    <section className="stat-band">
      <div className="wrap stat-grid">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
