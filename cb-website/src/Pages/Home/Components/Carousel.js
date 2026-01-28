import { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    image:
      "https://www.thelanddevelopmentsite.com/wp-content/uploads/2020/02/Land-Development-Construction-Site-1024x576.jpg",
    title: "Land Development",
    text: "Transforming raw land into productive spaces."
  },
  {
    image:
      "https://tinyurl.com/2dma8lts",
    title: "Construction Projects",
    text: "High-quality builds designed for longevity."
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    title: "Engineering Solutions",
    text: "Innovative engineering for modern challenges."
  }
];

const Carousel = () => {
  const [active, setActive] = useState(0);

  // 🔁 AUTO SLIDE every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === active ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="carousel-caption">
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
            <button className="carousel-btn">Learn More</button>
          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
