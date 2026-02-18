import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Optional: if you want to separate CSS into its own file


/* ─── MENU DATA ──────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Home", section: "home" },
  { label: "Services", section: "services" },
  { label: "Projects", section: "projects" },
  {
    label: "About Us",
    dropdown: [
      { label: "Company", section: "about" },
      { label: "Mission & Vision", section: "about" },
      { label: "Organization Chart", section: "about" },
    ],
  },
  {
    label: "Contact",
    dropdown: [
      { label: "Email", section: "contact" },
      { label: "Location", section: "contact" },
    ],
  },
];

/* ─── COMPONENT ─────────────────────────────────────────── */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // label string
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  /* scroll helper */
  const handleNav = (section) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileDropdown = (label) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <>
      

      <nav className={`nb-root${scrolled ? " scrolled" : " at-top"}`}>
        <div className="nb-container">

          {/* ── LOGO ── */}
          <div className="nb-logo" onClick={() => handleNav("home")} role="button" tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleNav("home")}>
            <span className="nb-logo-main">
              <span>CLIBER</span>DUCHE
            </span>
            <span className="nb-logo-sub">Corporation · Est. 2018</span>
          </div>

          {/* ── DESKTOP MENU ── */}
          <ul className="nb-menu">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <li key={item.label} className="nb-dropdown-item">
                  <button className="nb-btn">
                    {item.label}
                    <span className="nb-chevron">▾</span>
                  </button>
                  <ul className="nb-dropdown-menu">
                    {item.dropdown.map((sub) => (
                      <ul key={sub.label}>
                        <button
                          className="nb-dropdown-btn"
                          onClick={() => handleNav(sub.section)}
                        >
                          <span className="nb-dropdown-dot" />
                          {sub.label}
                        </button>
                      </ul>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <button className="nb-btn" onClick={() => handleNav(item.section)}>
                    {item.label}
                  </button>
                </li>
              )
            )}

           
          </ul>

          {/* ── HAMBURGER ── */}
          <button
            className={`nb-hamburger${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="nb-bar" />
            <span className="nb-bar" />
            <span className="nb-bar" />
          </button>
        </div>
      </nav>

      {/* ── MOBILE SLIDE-IN MENU ── */}
      <div className={`nb-mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        {NAV_ITEMS.map((item) =>
          item.dropdown ? (
            <div key={item.label}>
              <button
                className="nb-mobile-btn"
                onClick={() => toggleMobileDropdown(item.label)}
              >
                {item.label}
                <span style={{
                  fontSize: "0.7rem",
                  transition: "transform 0.25s",
                  transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                  color: openDropdown === item.label ? "#F59E0B" : "#475569"
                }}>▾</span>
              </button>
              <div className={`nb-mobile-dropdown${openDropdown === item.label ? " open" : ""}`}>
                {item.dropdown.map((sub) => (
                  <button
                    key={sub.label}
                    className="nb-mobile-sub-btn"
                    onClick={() => handleNav(sub.section)}
                  >
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#F59E0B", flexShrink: 0,
                      display: "inline-block"
                    }} />
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button
              key={item.label}
              className="nb-mobile-btn"
              onClick={() => handleNav(item.section)}
            >
              {item.label}
            </button>
          )
        )}

      </div>
    </>
  );
};

export default Navbar;