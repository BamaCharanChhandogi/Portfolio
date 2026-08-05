const stack = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Cloudflare Workers",
  "Durable Objects",
  "AWS Lambda",
  "Shopify APIs",
  "GoHighLevel OAuth",
  "MongoDB",
  "DynamoDB",
  "PostgreSQL",
  "AI Video",
];

export function Marquee() {
  return (
    <section className="marquee-band" aria-label="Technology stack">
      <div className="marquee-track">
        {[...stack, ...stack].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}
