import { useState } from "react";
import "./About.css";

const aboutData = [
  {
    title: "Our Mission",
    content:
      "CLIBERDUCHE CORPORATION is dedicated to responsible land development, providing high-quality backfill and sub-base materials for infrastructure and land development projects. We are committed to sustainable practices, strict compliance with Philippine environmental regulations, and delivering value to our communities, investors, employees, and stakeholders. Our company is proud to contribute to the national economy by creating employment opportunities for Filipinos.",
  },
  {
    title: "Our Vision",
    content:
      "To be a highly respected, world-class land development company recognized for our commitment to international standards, environmental stewardship, and sustainable growth. We aim to transform land development sites into future commercial and residential projects, contributing to the long-term progress of the Philippines.",
  },
  {
    title: "Core Values",
    content:
      "We uphold the highest standards of quality, safety, and integrity in all our operations.\n\n" +
      "Quality: We ensure our projects meet or exceed local and national standards, delivering competitive value in the market.\n\n" +
      "Safety: We prioritize the safety of our worksites, personnel, and communities, implementing best practices before, during, and after every project.\n\n" +
      "Integrity: We comply with all relevant laws and regulations, maintain a reliable workforce, and deliver projects on time with honesty and transparency.",
  },
];

const orgData = [
  { role: "PRESIDENT/CEO", image: "/images/ceo.jpg" },
  { role: "VICE PRESIDENT", image: "/images/vp.jpg" },
  { role: "MARKETING MANAGER", image: "/images/mm.jpg" },
  { role: "CHIEF OF SITE OPERATION", image: "/images/coso.jpg" },
  { role: "PURCHASING HEAD", image: "/images/ph.jpg" },
  { role: "HEAD-HR ADMIN/LEGAL", image: "/images/hhr.jpg" },
  { role: "ACCOUNTING HEAD", image: "/images/ah.jpg" },
  { role: "PROJECT MANAGER", image: "/images/pm.jpg" },
  { role: "PURCHASING OFFICER", image: "/images/po.jpg" },
  { role: "HR ADMIN OFFICER", image: "/images/hrao.jpg" },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      id="about"
      className="section about"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
                     url("https://as1.ftcdn.net/v2/jpg/00/52/14/94/1000_F_52149432_4FhRgWtKJQFCM299StO3te3zwXF5KAfE.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "80px 20px",
      }}
    >
      <div className="container">
        <h2>About Us</h2>

        <p className="intro">
          The Company was established in 2018, CLIBERDUCHE CORPORATION
          was born out of the dream of a person to provide the best for his family without leaving the country anymore.
          This person found this opportunity in the wide field of the construction business.
          Immediately, he invited his friends to join him and officially registered CLIBERDUCHE CORPORATION was
          registered with the Securities and Exchange Commission on as November 28, 2018.
        </p>

        <p>
          CLIBERDUCHE stands for the surnames of the founder and co-founders of the Corporation ;
        </p>
        <p>CLImaco</p>
        <p>BERonilla</p>
        <p>PiaDUCHE</p>

        {/* Separate Containers */}
        <div className="about-cards">
          {aboutData.map((item, index) => (
            <div key={index} className="about-card">
              <h3>{item.title}</h3>
              <div className="about-card-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Organization Carousel */}
        <div className="org-section">
          <h2 className="org-title">Our Organization</h2>

          <div className="org-carousel-wrapper">
            <button
              className="org-btn"
              onClick={() =>
                setCurrentIndex(currentIndex === 0 ? orgData.length - 1 : currentIndex - 1)
              }
            >
              ‹
            </button>

            <div className="org-carousel">
              <div
                className="org-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {orgData.map((item, index) => (
                  <div className="org-card" key={index}>
                    <img src={item.image} alt={item.role} />
                    <h4>{item.role}</h4>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="org-btn"
              onClick={() =>
                setCurrentIndex(currentIndex === orgData.length - 1 ? 0 : currentIndex + 1)
              }
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;