import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./components/ServicesCard";
import ServiceModal from "./components/ServiceModal";
import bg from "./images/bg3.png";
import "./styles/services.css";

// Import separated data
import { SERVICES_DATA } from "./data/servicesData";

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleSeeMore = () => {
    navigate("/ServicePage");
  };

  return (
    <>
      <section
        className="sv-section"
        id="services"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Header */}
        <div className="sv-header">
          <div className="sv-header-inner">
            <p className="sv-label">What We Do</p>
            <h2 className="sv-heading">
              Our <span className="sv-accent">Services</span>
            </h2>
            <div className="sv-rule" />
            <p className="sv-subtitle">
              Comprehensive construction and development solutions tailored to your
              project needs. Quality, efficiency, and safety at every stage.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="sv-container">
          <div className="sv-grid">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => handleCardClick(service)}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="sv-cta">
            <button className="sv-cta-btn" onClick={handleSeeMore}>
              🏗️ &nbsp; See All Services
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Services;
