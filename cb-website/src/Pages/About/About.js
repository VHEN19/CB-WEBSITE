import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Components/styles/About.css";

import aboutData from "./Components/aboutData";
import orgData from "./Components/orgData";
import useInView from "./Components/useInView";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [heroRef, heroInView] = useInView(0.1);
  const [cardsRef, cardsInView] = useInView();
  const [orgRef, orgInView] = useInView();

  return (
    <section id="about" className="ab-root">
      {/* HERO */}
      <div ref={heroRef} className={`ab-hero${heroInView ? " in-view" : ""}`}>
        <div className="ab-hero-slash" />
        <div className="ab-hero-bottom-fade" />
        <div className="ab-hewro-inner">
          <p className="ab-eyebrow">Est. 2018</p>
          <h2 className="ab-hero-title">About <span>Us</span></h2>
          <div className="ab-hero-divider" />
          <p className="ab-hero-text">
            Established in 2018, CLIBERDUCHE CORPORATION was born from the vision of building a better
            future through responsible land development. Founded by individuals united by purpose, the
            company continues to grow with integrity, innovation, and dedication to community progress.
          </p>
          <div className="ab-hero-badges">
            <span>🏗️ Construction</span>
            <span>🌿 Sustainable</span>
            <span>🇵🇭 Filipino-Owned</span>
            <span>📋 SEC Registered</span>
          </div>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="ab-shell">
        <p className="ab-label">Who We Are</p>
        <h2 className="ab-heading">Mission, Vision &amp; <em>Values</em></h2>
        <div className="ab-rule" />
        <div ref={cardsRef} className={`ab-cards${cardsInView ? " in-view" : ""}`}>
          <div className="ab-cards-grid">
            {aboutData.map((item, i) => (
              <div key={i} className="ab-card" style={{ "--card-accent": item.accent }}>
                <div className="ab-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="ab-org-bg">
        <div className="ab-shell" style={{ paddingTop: "80px" }}>
          <p className="ab-label">Meet the Team</p>
          <h2 className="ab-heading">Our <em>Leadership</em></h2>
          <div className="ab-rule" />
          <div ref={orgRef} className={`ab-org-section${orgInView ? " in-view" : ""}`}>
            <div className="ab-org-grid">
              {orgData.map((item, i) => (
                <div className="ab-org-card" key={i}>
                  <div className="ab-org-img-wrap">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.role}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div className="ab-org-avatar" style={{ display: item.image ? "none" : "flex" }}>
                      {item.initial}
                    </div>
                    <div className="ab-org-img-overlay" />
                  </div>
                  <div className="ab-org-body">
                    <div className="ab-org-role">{item.role}</div>
                    <div className="ab-org-name">{item.name}</div>
                    <div className="ab-org-dot" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Learn More */}
      <div className="ab-learn-more">
        {location.pathname !== "/aboutpage" && (
          <button
            className="ab-learn-btn"
            onClick={() => {
              navigate("/aboutpage");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Explore More →
          </button>
        )}
      </div>
    </section>
  );
};

export default About;
