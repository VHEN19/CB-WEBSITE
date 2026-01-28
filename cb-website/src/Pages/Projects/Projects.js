import "./Projects.css";


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-hero">
        <img
          src="https://tinyurl.com/23osw8hj"
          alt="Projects Hero Banner"
          className="hero-image"
        />
        <div className="hero-overlay right-text">
          <div className="hero-content">
            <h1>Cliberduche Corporation</h1>
            <p>Building Excellence Through Innovation</p>
            <a href="/projectlist" className="explore-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;