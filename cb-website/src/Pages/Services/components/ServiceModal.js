import React, { useEffect } from "react";
import PropTypes from "prop-types";

const ServiceModal = ({ service, onClose }) => {
  const { title, image, fullDescription, tags, accent, icon } = service;

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="sv-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="sv-modal"
        onClick={(e) => e.stopPropagation()}
        style={{ "--modal-accent": accent }}
      >
        {/* Close button */}
        <button
          className="sv-modal-close"
          onClick={onClose}
          aria-label="Close modal"
          title="Close"
        >
          ✕
        </button>

        {/* Image */}
        <div className="sv-modal-img-wrap">
          <img src={image} alt={title} className="sv-modal-img" />
          <div className="sv-modal-img-overlay" />
        </div>

        {/* Content */}
        <div className="sv-modal-body">
          <div className="sv-modal-icon">{icon}</div>
          <h2 id="modal-title" className="sv-modal-title">
            {title}
          </h2>
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="sv-modal-tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="sv-modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="sv-modal-desc">{fullDescription}</p>

          {/* CTA */}
          <div className="sv-modal-footer">
            <button className="sv-modal-cta" onClick={onClose}>
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    accent: PropTypes.string,
    image: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ServiceModal;