import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "CBD Building Project",
    description: "sample description for CBD Building Project.",
    category: "Building",
    status: "Completed",
    image: "/images/cbd_1.jpg",
  },
  {
    title: "MDI Project",
    description: "sample description for MDI Project.",
    category: "Structural",
    status: "Completed",
    image: "/images/mdi_1.png",
  },
  {
    title: "Pier 2 North Harbour Project",
    description: "sample description for Pier 2 North Harbour Project.",
    category: "Structural",
    status: "Ongoing",
    image: "/images/pier.png",
  },
  {
    title: "Cavite Project",
    description: "sample description for Cavite Project.",
    category: "Structural",
    status: "Completed",
    image: "/images/cavite_1.png",
  },
  {
    title: "MDI–Mercator Holdings Project 1",
    description: "sample description for MDI–Mercator Holdings Project 1.",
    category: "Structural",
    status: "Ongoing",
    image: "/images/mdi-mer_p1.png",
  },
  {
    title: "MDI–Mercator Holdings Project 2",
    description: "sample description for MDI–Mercator Holdings Project 2.",
    category: "Structural",
    status: "Completed",
    image: "/images/mdi-mer_p2.png",
  },
  {
    title: "MDI–Mercator Holdings Project 3",
    description: "sample description for MDI–Mercator Holdings Project 3.",
    category: "Structural",
    status: "Recent",
    image: "/images/mdi-mer_p3.png",
  },
  {
    title: "WDV Phase 4 – Tanza",
    description: "sample description for WDV Phase 4 – Tanza.",
    category: "Structural",
    status: "Ongoing",
    image: "/images/wdv.png",
  },
];

const ProjectsList = () => {
  const [categoryFilter, setCategoryFilter] = useState("Featured");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    const categoryMatch =
      categoryFilter === "Featured" ||
      categoryFilter === "All" ||
      project.category === categoryFilter;

    const statusMatch =
      statusFilter === "All" || project.status === statusFilter;

    return categoryMatch && statusMatch;
  });

  return (
    <section id="projectlist" className="projects-list-section">
      <h2 className="projects-title">All Projects</h2>

      <div className="filter-group">
        {["Featured", "Building", "Structural"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              categoryFilter === cat ? "active-category" : ""
            }`}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <label className="status-label">Filter</label>
        <select
          className="status-dropdown"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {["All", "Completed", "Ongoing", "Recent"].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="projects-grid">
        {filteredProjects.length ? (
          filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>
                <strong>Category:</strong> {project.category}
              </p>
              <p>
                <strong>Status:</strong> {project.status}
              </p>
            </div>
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;