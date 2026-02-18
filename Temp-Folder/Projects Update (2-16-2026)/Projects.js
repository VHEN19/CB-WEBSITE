import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

//data 
export const projectsData = [
  {// 4
    title: "CBD Building Project",
    description: [
      "The CBD Building Project involved the construction of a 3-storey commercial building designed to provide functional and durable space for business operations. The structure was carefully developed with reinforced concrete framing, efficient space planning, and compliance with local building standards to ensure safety and long-term performance.",
      "The scope of work focused on the full structural development of the 3-storey building, including foundation works, column and beam installation, slab construction, and exterior finishing. The project was executed with strict quality control measures and coordinated project management to ensure timely completion and structural integrity.",
      "This project has significantly enhanced the business environment in CBD, offering modern facilities for tenants and contributing to urban development. The completed building demonstrates a balance between functionality, aesthetics, and sustainability, serving as a model for future commercial projects in the area."
    ],
    category: "Building",
    status: "Completed",
    completionYear: "2019",
    company: "Cliberduche Corporation",
    location: "CBD, Pulo",
    projectScope: ["3-STOREY BUILDING"],
    images: [
      "/images/cbd_1.png",
      "/images/cbd_2.png",
      "/images/cbd_3.jpg",
      "/images/cbd_4.jpg"
    ]
  },
  {// 1
    title: "MDI Project",
    description: [
      "The MDI Project focused on comprehensive site development works, including embankment construction, storm drainage installation, road network development, and perimeter fencing. The embankment works were carried out to establish stable and properly elevated ground levels, ensuring site readiness and long-term structural support.",
      "The scope also covered the installation of an efficient storm drainage system to manage surface water flow and prevent flooding, along with the construction of internal road networks to improve accessibility within the project area. Perimeter fencing was completed to enhance site security and clearly define property boundaries, all executed in compliance with engineering standards and quality control measures.",
      "This project has improved overall operational efficiency for the site, providing safe and sustainable infrastructure for future developments. It also minimized environmental impact by integrating proper water management systems and maintaining compliance with local regulations, enhancing the site's resilience to seasonal weather conditions."
    ],
    category: "Structural",
    status: "Completed",
    completionYear: "2019",
    company: ["MDI Metro Drug", "Zuellig Pharma Corporation"],
    projectScope: [
      "Embankment", 
      "Storm Drainage", 
      "Road Network",
      "Fencing"
    ],
    images: [
      "/images/mdi_1.jpg",
      "/images/mdi_2.jpg",
      "/images/mdi_3.png",
      "/images/mdi_4.png"
    ]
  },
  {// 7
    title: "Pier 2 North Harbour Project",
    description: [
      "The Pier 2 North Harbour Project involves comprehensive civil and infrastructure works, including the reconstruction of an existing bridge, pavement development, and lagoon improvement. The bridge reconstruction focuses on strengthening structural capacity and ensuring safe and reliable transport access within the port area, while the pavement works enhance durability and load-bearing performance for heavy-duty operations.",
      "The scope also includes embankment stabilization, installation of an efficient drainage system, and the integration of water and electrical works to support operational requirements. All activities are being carried out with strict adherence to engineering standards, safety regulations, and quality control procedures to ensure long-term functionality and resilience of the harbor infrastructure.",
      "Once completed, the project will increase port capacity, streamline logistics, and improve safety for cargo and passenger operations. It also supports economic growth in the region by enabling larger vessels and higher traffic flow, while maintaining environmental considerations and structural longevity."
    ],
    category: "Structural",
    status: "Ongoing",
    completionYear: "2026",
    company: "Northport",
    projectScope: [
      "Reconstruction of Bridge", 
      "Pavement", 
      "Lagoon", 
      "Embankment", 
      "Drainage", 
      "Water & Electrical Works"
    ],
    images: [
      "/images/pier.png",
      "/images/pier_1.png",
      "/images/pier_2.jpg",
      "/images/pier_3.jpg"
    ]
  },
  {// 3
    title: "Cavite Project",
    description: [
      "The Cavite Project covered a total land area of 18.3 hectares and involved comprehensive site development and infrastructure works. The project scope included leveling and compaction to prepare and stabilize the ground, ensuring proper elevation and soil density for long-term structural support. These preparatory works established a solid foundation for subsequent infrastructure development.",
      "The scope also included the installation of drainage systems and the development of an internal road network to improve accessibility and water management across the site. Additional works such as riprap installation for slope protection, bridge construction for improved connectivity, and rectification works to address site adjustments were completed in accordance with engineering standards and quality control procedures.",
      "The completed infrastructure enhances transportation safety and accessibility for residents and commercial vehicles, while also reducing flood risks. This project demonstrates sustainable planning and effective site management, serving as a model for future large-scale regional developments."
    ],
    category: "Structural",
    status: "Completed",
    completionYear: "2021",
    location: "Silang, Cavite",
    projectScope: [
      "Leveling", 
      "Compaction", 
      "Drainage",
      "Road Network",
      "Riprap",
      "Bridge",
      "Rectification"
    ],
    images: [
      "/images/cavite_1.png",
      "/images/cavite_2.png",
      "/images/cavite_3.jpg",
      "/images/cavite_4.png"
    ]
  },
  {// 2
    title: "MDI–Mercator Holdings Project 1",
    description: [
      "The MDI–Mercator Holdings Project 1 focused on comprehensive site preparation works, including clearing and grubbing operations to remove vegetation, debris, and other surface obstructions within the project area. The scope also covered the removal of unsuitable soil materials to ensure proper ground stability and suitability for future development.",
      "Additional works included land leveling to achieve the required site elevations and the installation of temporary fencing to secure the area during construction activities. All site preparation tasks were carried out in accordance with engineering standards, safety regulations, and quality control procedures to ensure readiness for subsequent construction phases.",
      "The project prepared the site efficiently for future industrial development, reducing potential delays in construction timelines. It also strengthened overall site safety and compliance, ensuring a secure and well-managed environment for all ongoing operations."
    ],
    category: "Structural",
    status: "Completed",
    completionYear: "2024",
    company: ["MDI Metro Drug", "Zuellig Pharma Corporation"],
    projectScope: [
      "Clearing", 
      "Grubbing", 
      "Temporary Fence", 
      "Removal of Unsuitable Soil",
      "Leveling"
    ],
    images: [
      "/images/mdi-mer_p1.png",
      "/images/mdi-mer_p1-2.png",
      "/images/mdi-mer_p1-3.jpg",
      "/images/mdi-mer_p1-4.jpg"
    ]
  },
  {// 5
    title: "MDI–Mercator Holdings Project 2",
    description: [
      "The MDI–Mercator Holdings Project 2 involved comprehensive site development works, including embankment construction, installation of gabion and retaining walls, and pavement development. The embankment works were carried out to achieve proper elevation and ground stability, while the gabion and retaining walls were constructed to provide slope protection and structural reinforcement within the site.",
      "The scope also included the installation of a perimeter fence and gate system to enhance site security, as well as electrical post lights to improve visibility and safety. Landscape works were completed to enhance the overall site appearance and environmental integration, ensuring a functional, secure, and well-developed infrastructure environment.",
      "Upon completion, the project will provide a secure and sustainable site with improved accessibility, functional infrastructure, and well-integrated landscape features. These improvements ensure long-term operational efficiency and environmental resilience."
    ],
    category: "Structural",
    status: "Completed",
    completionYear: "2025",
    company: ["MDI Metro Drug", "Zuellig Pharma Corporation"],
    location: "Mercator Holdings Site",
    projectScope: [
      "Embankment", 
      "Gabion Wall", 
      "Perimeter Fence and Gate",
      "Retaining Wall",
      "Pavement",
      "Electrical Post Lights",
      "Landscape"
    ],
    images: [
      "/images/mdi-mer_p2.png",
      "/images/mdi-mer_p2-2.png",
      "/images/mdi-mer_p2-3.png",
      "/images/mdi-mer_p2-4.png"
    ]
  },
  {// 6
   title: "MDI–Mercator Holdings Project 3",
    description: [
      "MDI–Mercator Holdings Project 3 involves major site development and infrastructure works, including embankment construction, diversion road development, and retaining wall installation. The embankment works are being carried out to establish proper ground elevation and stability, while the diversion road is designed to improve site accessibility and traffic flow within the project area.",
      "The scope also includes drainage system installation to ensure effective water management, pavement works to provide durable and load-bearing surfaces, and the installation of electrical post lights to enhance safety and visibility. All works are being implemented in accordance with engineering standards, quality control procedures, and safety regulations as the project progresses toward completion.",
      "The ongoing development ensures that the site will support future industrial and commercial activities efficiently. It also highlights the company’s commitment to quality, operational safety, and sustainable infrastructure practices throughout the construction process."
    ],
    category: "Structural",
    status: "Ongoing",
    completionYear: "2026",
    company: ["MDI Metro Drug", "Zuellig Pharma Corporation"],
    projectScope: [
      "Embankment", 
      "Diversion Road", 
      "Retaining Wall",  
      "Drainage",
      "Pavement",
      "Electrical Post Lights"
    ],
    images: [
      "/images/mdi-mer_p3.jpg",
      "/images/mdi-mer_p3-2.png",
      "/images/mdi-mer_p3-3.png",
      "/images/mdi-mer_p3-4.png"
    ]
  },
  {// 8
    title: "WDV Phase 4 – Tanza",
    description: [
      "WDV Phase 4 in Tanza focuses on civil infrastructure works, including the construction of retaining walls and perimeter fencing. The retaining walls are designed to stabilize slopes, prevent soil erosion, and ensure the long-term stability of the site, while the perimeter fencing enhances security and clearly defines project boundaries.",
      "The project also involves coordination with ongoing road and drainage development to maintain functional and safe site conditions. All works are being executed with attention to engineering standards, safety regulations, and quality control measures, reflecting a commitment to improving regional infrastructure and site management.",
      "Once complete, this project will enhance safety, accessibility, and operational efficiency in the region. It also contributes to sustainable development by integrating proper site management, erosion control, and infrastructure resilience for future civil works."

    ],
    category: "Structural",
    status: "Ongoing",
    completionYear: "2026",
    company: "Embarkment",
    location: "Tanza, Cavite Philippines",
    projectScope: [ 
      "Retaining Wall",  
      "Perimeter Fence"
    ],
    images: [
      "/images/wdv.jpg",
      "/images/wdv-2.jpg",
      "/images/wdv-3.jpg",
      "/images/wdv-4.jpg"
    ]
  }
];

const CATEGORY_OPTIONS = ["Featured", "Building", "Structural"];
const STATUS_OPTIONS = ["All", "Completed", "Ongoing"];

const Projects = () => {
  const navigate = useNavigate();
  const projectsRef = useRef(null);

  const [categoryFilter, setCategoryFilter] = useState("Featured");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showTopButton, setShowTopButton] = useState(false);

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
      <div className="projects-hero">
        <img src="/images/banner.jpg" alt="Projects Hero Banner" className="hero-image" />
        <div className="hero-overlay right-text">
        <div className="hero-content">
          <h1>Building the Future</h1>
          <p>
            Delivering high-quality construction solutions through innovation, integrity, 
            and a commitment to excellence in every project we undertake.
          </p>
          <button className="explore-btn" onClick={scrollToProjects}>
            Explore
          </button>
        </div>
        </div>
      </div>

      <section className="projects-intro">
        <div className="projects-intro-container">
          <h2>Engineering Projects That Define Excellence</h2>
          <p>
            Our construction company reflects years of experience in delivering reliable, innovative,
            and high-quality construction and infrastructure solutions. From building developments to
            large-scale structural works, each project is executed with precision, safety, and sustainability in mind.
          </p>
          <div className="intro-stats">
            <div className="stat">
              <h3>5</h3>
              <span>Completed Projects</span>
            </div>
            <div className="stat">
              <h3>8+</h3>
              <span>Years of Experience</span>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <span>Ongoing Developments</span>
            </div>
          </div>
        </div>
      </section>

      <div ref={projectsRef} className="projects-section">
        <h2 className="projects-title">All Projects</h2>

        <div className="filters-wrapper">
          <div className="category-filters">
            {CATEGORY_OPTIONS.map((category) => (
              <button
                key={category}
                className={`filter-btn ${categoryFilter === category ? "active-category" : ""}`}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="status-filter">
            <label className="status-label">Filter:</label>
            <select
              className="status-dropdown"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.images[0]} alt={project.title} />
                <h3>{project.title}</h3>
              </div>
            ))
          ) : (
            <p className="no-projects">No projects found.</p>
          )}
        </div>
      </div>

      <footer className="projects-footer">
        <p>Ready to bring your vision to life? Let's build something amazing together.</p>
      </footer>

      {showTopButton && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      )}
    </section>
  );
};

export default Projects;
