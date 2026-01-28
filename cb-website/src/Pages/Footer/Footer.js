import "./styles/Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebookF } from "react-icons/fa";
import CompanyLogo from "./assets/CompanyLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top CTA */}
      <div className="footer-cta">
        <p>
          Professional surveying, engineering, and construction services are
          only offered and performed in states where we are licensed.
        </p>
        <a href="#contact" className="footer-btn">Contact Us</a>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <img
            src={CompanyLogo}
            alt="Company Logo"
          />
          <div className="footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* News */}
        {/* <div className="footer-column">
          <h4>News + Insights</h4>
          <a href="/news">News</a>
          <a href="/blogs">Blogs</a>
          <a href="/brochures">Brochures</a>
          <a href="/videos">Videos</a>
        </div> */}

        {/* Industries */}
        <div className="footer-column">
          <h4>Industries We Serve</h4>
          {/* <a href="/energy">Energy + Chemicals</a>
          <a href="/utilities">Power + Utilities</a>
          <a href="/transition">Energy Transition</a>
          <a href="/manufacturing">Manufacturing + Infrastructure</a> */}
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services We Offer</h4>
          {/* <a href="/engineering">Engineering</a>
          <a href="/procurement">Procurement</a>
          <a href="/construction">Construction Services</a>
          <a href="/automation">Automation + Controls</a>
          <a href="/maintenance">Operations + Maintenance</a> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-info">
          <span className="footer-info-item">
            <FaPhoneAlt className="footer-info-icon" />
            <a href="tel:+63495466107">+63 49 546-6107</a> / <a href="tel:+639673026643">0967-302-6643</a>
          </span>
          <span className="footer-info-item">
            <FaEnvelope className="footer-info-icon" />
            <a href="mailto:cliberduche.corp@yahoo.com">cliberduche.corp@yahoo.com</a>
          </span>
          <span className="footer-info-item">
            <FaMapMarkerAlt className="footer-info-icon" />
            Lot 3739 National Highway, 3/F CBD Building Brgy. Pulo, Cabuyao City, Laguna, Philippines
          </span>
        </div>

        <div className="footer-copy">
          <span>
            © {new Date().getFullYear()} Cliberduche Corporation. All rights reserved.
          </span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
