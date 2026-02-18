import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import CompanyLogo from "./assets/CompanyLogo.png";
import "./styles/Footer.css";

import { companyLinks, industriesLinks, servicesLinks, contactInfo } from "./components/footerData";
import { socials } from "./components/socialData";

const Footer = () => {
  return (
    <footer className="ft-root">

      {/* CTA Banner */}
      <div className="ft-cta">
        <div className="ft-cta-text">
          <p className="ft-cta-label">Ready to Build?</p>
          <h2 className="ft-cta-heading">Let's Work Together</h2>
          <p className="ft-cta-sub">
            Professional land development, backfill supply, and infrastructure services
            — available across the Philippines by licensed teams.
          </p>
        </div>
        <a href="#contact" className="ft-cta-btn">🏗️ &nbsp;Contact Us</a>
      </div>

      {/* Main Grid */}
      <div className="ft-grid">

        {/* Brand */}
        <div className="ft-brand">
          <div className="ft-logo-wrap">
            <div>
              <img
                src={CompanyLogo}
                alt="Cliberduche Corporation"
                className="ft-logo-img"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <span className="ft-logo-text"><span>CLIBER</span>DUCHE</span>
              <span className="ft-logo-tagline">Corporation · Est. 2018</span>
            </div>
          </div>
          <p className="ft-brand-desc">
            A Filipino-owned land development company committed to quality,
            safety, and sustainable infrastructure across the Philippines.
          </p>
          <div className="ft-socials">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="ft-social-link">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="ft-col">
          <h4>Company</h4>
          {companyLinks.map((link, i) => <a key={i} href={link.href}>{link.label}</a>)}
        </div>

        {/* Industries */}
        <div className="ft-col">
          <h4>Industries We Serve</h4>
          {industriesLinks.map((link, i) => <a key={i} href={link.href}>{link.label}</a>)}
        </div>

        {/* Services */}
        <div className="ft-col">
          <h4>Services We Offer</h4>
          {servicesLinks.map((link, i) => <a key={i} href={link.href}>{link.label}</a>)}
        </div>
      </div>

      <div className="ft-divider" />

      {/* Bottom Bar */}
      <div className="ft-bottom">
        <div className="ft-info">
          <span className="ft-info-item">
            <FaPhoneAlt className="ft-info-icon" />
            <span>
              {contactInfo.phone.map((p, i) => (
                <a key={i} href={p.href}>{p.label}</a>
              )).reduce((prev, curr) => [prev, " / ", curr])}
            </span>
          </span>
          <span className="ft-info-item">
            <FaEnvelope className="ft-info-icon" />
            <a href={contactInfo.email.href}>{contactInfo.email.label}</a>
          </span>
          <span className="ft-info-item">
            <FaMapMarkerAlt className="ft-info-icon" />
            <span>{contactInfo.address}</span>
          </span>
        </div>

        <div className="ft-copy">
          <div>
            <p className="ft-copy-left">
              © {new Date().getFullYear()} <strong>Cliberduche Corporation.</strong> All rights reserved.
            </p>
            <p className="ft-made">Built with <span>♦</span> in the Philippines</p>
          </div>
          <div className="ft-copy-right">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
