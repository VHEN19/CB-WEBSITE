// src/pages/Services/components/service.js
import React from "react";
import "../styles/services.css";

const servicesData = [
  {
    title: "Creative Design",
    desc: "Professional branding, graphic design, and visual content to make your business stand out."
  },
  {
    title: "Digital Advertising",
    desc: "Targeted ads on Google, Facebook, and other platforms to increase reach and sales."
  },
  {
    title: "Social Media Marketing",
    desc: "Content creation, scheduling, and engagement strategies to grow your audience."
  },
  {
    title: "Video Production",
    desc: "High-quality video content for ads, promotions, and brand storytelling."
  },
  {
    title: "Print & Billboards",
    desc: "Offline marketing materials including posters, banners, and billboard campaigns."
  },
  {
    title: "Promotional Events",
    desc: "Event marketing and promotions to build brand awareness in your local area."
  }
];

const Service = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
