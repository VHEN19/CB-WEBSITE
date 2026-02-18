import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Projects.css";
import { projectsData } from "./components/data/projectData";

const CATEGORY_OPTIONS = ["Featured", "Building", "Structural"];
const STATUS_OPTIONS = ["All", "Completed", "Ongoing"];

const Projects = () => {
  const navigate = useNavigate();
  const projectsRef = useRef(null);

  const [categoryFilter, setCategoryFilter] = useState("Featured");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showTopButton, setShowTopButton] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const categoryMatch =
      categoryFilter === "Featured" || project.category === categoryFilter;
    const statusMatch = statusFilter === "All" || project.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const handleProjectClick = (project) => {
    navigate("/project-detail", { state: { project } });
  };

  const scrollToProjects = () => {
    const navbarHeight = 90;
    const top = projectsRef.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - navbarHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="projects-page">

      {/* ── HERO ── */}
      <div className="proj-hero">
        <div className="proj-hero-grid" />
        <div className="proj-hero-slash" />
        <img src="/images/banner.jpg" alt="Projects Hero Banner" className="proj-hero-img" />
        <div className="proj-hero-overlay" />
        <div className="proj-hero-content">
          <p className="proj-eyebrow">Our Portfolio · Cliberduche Corporation</p>
          <h1 className="proj-headline">Building<br /><span>The Future</span></h1>
          <p className="proj-tagline">
            Delivering high-quality construction solutions through innovation,
            integrity, and a commitment to excellence in every project we undertake.
          </p>
          <button className="proj-explore-btn" onClick={scrollToProjects}>
            Explore Projects <span className="proj-arrow">↓</span>
          </button>
        </div>
      </div>

      {/* ── INTRO STATS ── */}
      <div className="proj-intro">
        <div className="proj-intro-inner">
          <div className="proj-intro-text">
            <p className="proj-section-eyebrow">Engineering Excellence</p>
            <h2 className="proj-section-title">Projects That Define <span>A Standard</span></h2>
            <p className="proj-section-body">
              Our portfolio reflects years of experience delivering reliable, innovative, and high-quality
              construction and infrastructure solutions. From building developments to large-scale structural
              works, each project is executed with precision, safety, and sustainability in mind.
            </p>
          </div>
          <div className="proj-stats-row">
            {[
              { num: "5",  label: "Completed Projects" },
              { num: "8+", label: "Years of Experience" },
              { num: "3+", label: "Ongoing Developments" },
            ].map((s, i) => (
              <div key={i} className="proj-stat-card">
                <div className="proj-stat-num">{s.num}</div>
                <div className="proj-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div ref={projectsRef} className="proj-grid-section">
        <div className="proj-grid-header">
          <p className="proj-section-eyebrow">All Projects</p>
          <h2 className="proj-section-title">Our <span>Work</span></h2>
        </div>

        {/* Filters */}
        <div className="proj-filters">
          <div className="proj-cat-filters">
            {CATEGORY_OPTIONS.map((cat) => (
              <button
                key={cat}
                className={`proj-filter-btn${categoryFilter === cat ? " active" : ""}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="proj-status-filter">
            <span className="proj-filter-label">Status:</span>
            <select
              className="proj-status-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="proj-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="proj-card"
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="proj-card-img-wrap">
                  <img src={project.images[0]} alt={project.title} />
                  <div className="proj-card-overlay" />
                </div>
                <div className="proj-card-body">
                  <span className={`proj-card-status ${project.status === "Ongoing" ? "ongoing" : "completed"}`}>
                    {project.status}
                  </span>
                  <h3 className="proj-card-title">{project.title}</h3>
                  <p className="proj-card-category">{project.category}</p>
                  <span className="proj-card-cta">View Project →</span>
                </div>
                <div className="proj-card-index">0{index + 1}</div>
              </div>
            ))
          ) : (
            <p className="proj-no-results">No projects found.</p>
          )}
        </div>
      </div>

      {/* ── FOOTER BANNER ── */}
      <div className="proj-footer-banner">
        <div className="proj-footer-grid" />
        <p>Ready to bring your vision to life?</p>
        <span>Let's build something amazing together.</span>
      </div>

      {showTopButton && (
        <button className="proj-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      )}
    </section>
  );
};

export default Projects;