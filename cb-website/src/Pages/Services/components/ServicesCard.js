import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ service, onClick }) => {
  const { title, icon, accent, image, shortDesc, tags } = service;

  return (
    <div
      className="sv-card"
      style={{ "--card-accent": accent }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View details for ${title}`}
    >
      {/* Image */}
      <div className="sv-card-img-wrap">
        <img src={image} alt={title} className="sv-card-img" />
        <div className="sv-card-img-overlay" />
      </div>

      {/* Content */}
      <div className="sv-card-body">
        <div className="sv-card-icon">{icon}</div>
        <h3 className="sv-card-title">{title}</h3>
        <p className="sv-card-desc">{shortDesc}</p>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="sv-card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="sv-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Click hint */}
        <span className="sv-card-hint">Click for details →</span>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    accent: PropTypes.string,
    image: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ServiceCard;