import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Projects.css";

const ProjectDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const nextSlide = () => {
    if (project?.images && project.images.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % (project.images.length - 1));
    }
  };

  const prevSlide = () => {
    if (project?.images && project.images.length > 1) {
      setCurrentIndex(
        (prev) => (prev - 1 + (project.images.length - 1)) % (project.images.length - 1)
      );
    }
  };

  useEffect(() => {
    if (!project?.images || project.images.length < 2) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) return <p className="pd-not-found">Project not found.</p>;

  const carouselImages = project.images.slice(1);

  return (
    <section id="projectDetails" className="pd-page">

      {/* ── HERO ── */}
      <div className="pd-hero">
        <img src={project.images[0]} alt={project.title} className="pd-hero-img" />
        <div className="pd-hero-overlay" />
        <div className="pd-hero-content">
          <span className={`pd-status-badge ${project.status === "Ongoing" ? "ongoing" : "completed"}`}>
            {project.status}
          </span>
          <h1 className="pd-title">{project.title}</h1>
          {project.location && (
            <p className="pd-location">📍 {project.location}</p>
          )}
        </div>
      </div>

      {/* ── BACK BUTTON ── */}
      <button className="pd-back-btn" onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>

      {/* ── META + DESCRIPTION ── */}
      <div className="pd-body">
        <div className="pd-meta-grid">
          {[
            { label: "Category", value: project.category },
            { label: "Status", value: project.status },
            project.completionYear && { label: "Year", value: project.completionYear },
            project.company && {
              label: "Company",
              value: Array.isArray(project.company) ? project.company.join(", ") : project.company
            },
            project.location && { label: "Location", value: project.location },
          ].filter(Boolean).map((item, i) => (
            <div key={i} className="pd-meta-item">
              <span className="pd-meta-label">{item.label}</span>
              <span className="pd-meta-value">{item.value}</span>
            </div>
          ))}
        </div>

        {project.projectScope && project.projectScope.length > 0 && (
          <div className="pd-scope">
            <p className="pd-scope-label">Project Scope</p>
            <div className="pd-scope-tags">
              {project.projectScope.map((scope, i) => (
                <span key={i} className="pd-scope-tag">{scope}</span>
              ))}
            </div>
          </div>
        )}

        <div className="pd-descriptions">
          {project.description.map((para, idx) => (
            <p key={idx} className="pd-desc-para">{para}</p>
          ))}
        </div>
      </div>

      {/* ── CAROUSEL ── */}
      {carouselImages.length > 0 && (
        <div className="pd-carousel-section">
          <p className="proj-section-eyebrow" style={{ textAlign: "center", marginBottom: "20px" }}>Project Gallery</p>
          <div className="pd-carousel">
            <div className="pd-carousel-track">
              {carouselImages.map((img, idx) => (
                <div key={idx} className={`pd-carousel-slide${idx === currentIndex ? " active" : ""}`}>
                  <img src={img} alt={`${project.title} ${idx + 2}`} />
                </div>
              ))}
            </div>
            <button className="pd-car-btn left" onClick={prevSlide}>‹</button>
            <button className="pd-car-btn right" onClick={nextSlide}>›</button>
            <div className="pd-car-dots">
              {carouselImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`pd-dot${idx === currentIndex ? " active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="pd-footer">
        <div className="pd-footer-grid" />
        <div className="pd-footer-inner">
          <div className="pd-footer-col">
            <h3>About Our Projects</h3>
            <p>
              Cliberduche Corporation delivers high-quality infrastructure and construction projects
              across commercial, industrial, and structural sectors. Each project is executed with strict
              adherence to engineering standards, quality control, and timely delivery.
            </p>
          </div>
          <div className="pd-footer-col">
            <h3>Contact Information</h3>
            <div className="pd-contact-item">
              <span className="pd-contact-label">Address</span>
              <span>Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo, Cabuyao City, Laguna, Philippines</span>
            </div>
            <div className="pd-contact-item">
              <span className="pd-contact-label">Phone</span>
              <span>+63 49 546-6107 / 0967-302-6643</span>
            </div>
            <div className="pd-contact-item">
              <span className="pd-contact-label">Email</span>
              <span>cliberduche.corp@yahoo.com</span>
            </div>
          </div>
        </div>
        <div className="pd-footer-bottom">
          <p>© 2026 Cliberduche Corporation. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default ProjectDetail;