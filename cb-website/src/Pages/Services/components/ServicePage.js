import React, { useState } from "react";
import "../styles/servicePage.css";
import backfilling from "../images/backfilling.png";
import landDevelopment from "../images/LandDevelopment.jpeg";
import constructionSite from "../images/ConstructionSiteManagement.jpg";
import equipmentLeasing from "../images/Equipmentleasing.png";
import projectManagement from "../images/ProjectManagement.jpg";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Backfill / Land Sourcing",
      image: backfilling,
      description: "We provide high-quality backfill materials sourced from reliable suppliers. Our land sourcing services ensure you have the right materials for your projects, with competitive pricing and timely delivery. We handle everything from extraction to transportation."
    },
    {
      id: 2,
      title: "Land Development",
      image: landDevelopment,
      description: "Comprehensive land development services including site preparation, infrastructure planning, and environmental compliance. We transform raw land into development-ready properties with proper grading, drainage systems, and utilities installation."
    },
    {
      id: 3,
      title: "Site Management",
      image: constructionSite,
      description: "Professional on-site management ensuring safety, quality, and efficiency. Our experienced team oversees daily operations, coordinates with contractors, manages schedules, and maintains rigorous safety standards throughout your project lifecycle."
    },
    {
      id: 4,
      title: "Equipment Leasing",
      image: equipmentLeasing,
      description: "Wide range of construction equipment available for lease including excavators, dozers, cranes, and compactors. We offer flexible rental periods, competitive rates, and well-maintained machinery with full operator support."
    },
    {
      id: 5,
      title: "Project Management",
      image: projectManagement,
      description: "End-to-end project management solutions from planning to completion. We handle budgeting, scheduling, resource allocation, stakeholder communication, and quality assurance to ensure your project stays on time and within budget."
    }
  ];

  return (
    <main id="servicepage" className="service-page">
        {/* PAGE HEADER */}
        <header className="service-page-header">
          <div className="header-content-wrapper">
            <h1>Our Services</h1>
            <p>
              Explore our complete range of construction services designed to deliver exceptional results for every project phase and requirement.
            </p>
          </div>
        </header>

        {/* 5-CARD LAYOUT */}
        <section className="service-gallery">
          <div className="service-gallery-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="gallery-card"
                onClick={() => setSelectedService(service)}
              >
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p className="card-preview">Click for details</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREVIEW MODAL */}
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
              <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
              <h2>{selectedService.title}</h2>
              <p>{selectedService.description}</p>
            </div>
          </div>
        )}
      </main>
  );
};

export default ServicesPage;
