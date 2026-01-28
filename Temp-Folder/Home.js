import "./Home.css";
import Carousel from "./Carousel";
const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">

        {/* Hero Text Box */}
        <div className="hero-box">
          <h1>Innovating the Blueprint of Tomorrow</h1>
          <p>
            Cliberduche Corporation delivers reliable construction and
            engineering solutions built for the future.
          </p>
        </div>

        {/* Feature Boxes */}
        <div className="feature-boxes">
          <div className="feature-card">
            <h3>Foundations</h3>
            <p>Strong and durable groundwork for every project.</p>
          </div>

          <div className="feature-card">
            <h3>Site Development</h3>
            <p>Efficient planning and professional execution.</p>
          </div>

          <div className="feature-card">
            <h3>Full-scale Construction</h3>
            <p>End-to-end construction services you can trust.</p>
          </div>

          <div className="feature-card">
            <h3>Trust & Reliability</h3>
            <p>Committed to safety, quality, and excellence.</p>
          </div>
        </div>

        {/* Feature Carousel */}
        <Carousel />



      </div>
    </section>
  );
};

export default Home;
