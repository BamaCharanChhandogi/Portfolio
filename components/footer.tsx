import Link from "next/link";
import { FooterStatus } from "@/components/footer-status";
import { navigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-wrap">
        <div className="footer-grid">
          <div className="footer-main">
            <div className="footer-cta">
              <p className="label">Let's build something</p>
              <a href={siteConfig.socials.email}>Say hello →</a>
            </div>
            <div className="footer-socials" aria-label="Social links">
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer">
                X
              </a>
              <a href={siteConfig.socials.email}>
                Email
              </a>
            </div>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <FooterStatus />
          <p className="copyright">© {new Date().getFullYear()} {siteConfig.name}. Building cloud products and developer tools.</p>
        </div>
      </div>
    </footer>
  );
}
