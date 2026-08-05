import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <div className="wrap">
        <p className="label">404</p>
        <h1>404</h1>
        <p className="article-lede">This page wandered off.</p>
        <div className="cta">
          <Link className="btn p" href="/">
            Back home
          </Link>
          <Link className="btn s" href="/projects">
            Work
          </Link>
          <Link className="btn s" href="/blog">
            Writing
          </Link>
        </div>
      </div>
    </section>
  );
}
