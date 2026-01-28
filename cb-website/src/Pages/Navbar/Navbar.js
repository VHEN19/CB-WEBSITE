import { useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle navigation and scroll
  const handleNav = (section) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <h1 className="logo">CLIBERDUCHE</h1>

        {/* Hamburger Toggle (Mobile/Tablet) */}
        <div
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <button className="nav-link-btn" onClick={() => handleNav("home")}>Home</button>
          </li>
          <li>
            <button className="nav-link-btn" onClick={() => handleNav("services")}>Services</button>
          </li>
          {/* About Dropdown */}
          <li className={`dropdown ${aboutOpen ? "open" : ""}`}>
            <button
              className="nav-link-btn"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  setAboutOpen(!aboutOpen);
                } else {
                  handleNav("about");
                }
              }}
            >
              About Us ▾
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="nav-link-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    setAboutOpen(false);
                    handleNav("about");
                  }}
                >
                  Company
                </button>
              </li>
              <li>
                <button
                  className="nav-link-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    setAboutOpen(false);
                    handleNav("about");
                  }}
                >
                  Mission & Vision
                </button>
              </li>
            </ul>
          </li>
          {/* Contact Dropdown */}
          <li className={`dropdown ${contactOpen ? "open" : ""}`}>
            <button
              className="nav-link-btn"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  setContactOpen(!contactOpen);
                } else {
                  handleNav("contact");
                }
              }}
            >
              Contact ▾
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="nav-link-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    setContactOpen(false);
                    handleNav("contact");
                  }}
                >
                  Email
                </button>
              </li>
              <li>
                <button
                  className="nav-link-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    setContactOpen(false);
                    handleNav("contact");
                  }}
                >
                  Location
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
