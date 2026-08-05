import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FooterStatus } from "@/components/footer-status";
import { navigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-wrap">
        <div className="footer-cta">
          <p className="label">Let's build something</p>
          <a href={siteConfig.socials.email}>Say hello →</a>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="social-links" aria-label="Social links">
          <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" aria-label="X">
            <Twitter size={18} />
          </a>
          <a href={siteConfig.socials.email} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <FooterStatus />
        <p className="copyright">© {new Date().getFullYear()} {siteConfig.name}. Building cloud products and developer tools.</p>
      </div>
    </footer>
  );
}
