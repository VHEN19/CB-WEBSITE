import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Projects.css";

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

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) return <p className="not-found">Project not found.</p>;

  const carouselImages = project.images.slice(1);

  return (
    <section className="project-detail-page">
      <div className="project-hero">
        <img
          src={project.images[0]}
          alt={project.title}
          className="project-hero-image"
        />
      </div>

      <button className="back-btn-fixed" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="project-title">{project.title}</h1>

      <div className="project-info-container">
        <div className="project-meta-grid">
          <div className="meta-item">
            <p className="meta-label">Category</p>
            <p className="meta-value">{project.category}</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Status</p>
            <p className="meta-value">{project.status}</p>
          </div>
          {project.completionYear && (
            <div className="meta-item">
              <p className="meta-label">Completed Year</p>
              <p className="meta-value">{project.completionYear}</p>
            </div>
          )}
          {project.company && (
            <div className="meta-item">
              <p className="meta-label">Company</p>
              <p className="meta-value">
                {Array.isArray(project.company)
                  ? project.company.join(", ")
                  : project.company}
              </p>
            </div>
          )}
          {project.location && (
            <div className="meta-item">
              <p className="meta-label">Location</p>
              <p className="meta-value">{project.location}</p>
            </div>
          )}
          {project.projectScope && project.projectScope.length > 0 && (
            <div className="meta-item">
              <p className="meta-label">Project Scope</p>
              <p className="meta-value">{project.projectScope.join(", ")}</p>
            </div>
          )}
        </div>

        {project.description.map((para, idx) => (
          <p key={idx} className="project-description">
            {para}
          </p>
        ))}
      </div>

      {carouselImages.length > 0 && (
        <div className="project-carousel">
          {carouselImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} ${idx + 2}`}
              className={`carousel-image ${idx === currentIndex ? "active" : ""}`}
            />
          ))}

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevSlide}>‹</button>
            <button className="carousel-btn" onClick={nextSlide}>›</button>
          </div>

          <div className="carousel-indicator">
            {carouselImages.map((_, idx) => (
              <span
                key={idx}
                className={idx === currentIndex ? "active" : ""}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      )}

      <footer className="project-footer">
        <div className="footer-container">
          <div className="footer-section about-projects">
            <h3>About the Projects</h3>
            <p>
              Cliberduche Corporation delivers high-quality infrastructure and construction projects across commercial, industrial, and structural sectors. Each project is executed with strict adherence to engineering standards, quality control, and timely delivery to ensure client satisfaction.
            </p>
          </div>

      <div className="footer-section contact-info">
        <h3>Contact Information</h3>

        <div className="contact-item">
          <span className="contact-label">Office Address:</span>
          <span className="contact-value">
            Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo, Cabuyao City, Laguna, Philippines
          </span>
        </div>

        <div className="contact-item">
          <span className="contact-label">Contact Numbers:</span>
          <span className="contact-value">+63 49 546-6107 / 0967-302-6643</span>
        </div>

        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <span className="contact-value">cliberduche.corp@yahoo.com</span>
        </div>
      </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Cliberduche Corporation. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default ProjectDetail;
