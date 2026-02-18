// src/data/servicesData.js
import backfilling from "../images/backfilling.png";
import landDevelopment from "../images/LandDevelopment.jpeg";
import constructionSite from "../images/ConstructionSiteManagement.jpg";

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Backfill / Land Sourcing",
    icon: "⛏️",
    accent: "#F59E0B",
    image: backfilling,
    shortDesc: "Premium quality backfill materials sourced responsibly and delivered on time.",
    fullDescription:
      "We provide high-quality backfill materials sourced from reliable suppliers. Our land sourcing services ensure you have the right materials for your projects, with competitive pricing and timely delivery. We handle everything from extraction to transportation, ensuring consistent quality and environmental compliance throughout the supply chain.",
    tags: ["Material Supply", "Sub-Base", "Aggregates"],
  },
  {
    id: 2,
    title: "Land Development",
    icon: "🏗️",
    accent: "#3B82F6",
    image: landDevelopment,
    shortDesc: "End-to-end land development from raw lot grading to site preparation.",
    fullDescription:
      "Comprehensive land development services including site preparation, infrastructure planning, and environmental compliance. We transform raw land into development-ready properties with proper grading, drainage systems, and utilities installation. Our team ensures all work meets regulatory standards and project specifications.",
    tags: ["Grading", "Earthworks", "Site Prep"],
  },
  {
    id: 3,
    title: "Site Management",
    icon: "📋",
    accent: "#10B981",
    image: constructionSite,
    shortDesc: "Professional on-site management ensuring safety, quality, and efficiency.",
    fullDescription:
      "Professional on-site management ensuring safety, quality, and efficiency. Our experienced team oversees daily operations, coordinates with contractors, manages schedules, and maintains rigorous safety standards throughout your project lifecycle. We provide detailed progress reporting and proactive problem-solving to keep your project on track.",
    tags: ["Supervision", "Safety", "Compliance"],
  },
];
