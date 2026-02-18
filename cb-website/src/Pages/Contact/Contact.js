import { useState } from "react";
import { MdChat, MdClose, MdSend, MdCheckCircle } from "react-icons/md";
import { handleSubmit } from "./Components/confunc";
import "./Contact.css";


const Contact = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setOpen((o) => !o);
    setSuccess(false);
  };

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <button
        className={`ct-fab${open ? " is-open" : ""}`}
        onClick={toggleForm}
        aria-label={open ? "Close contact form" : "Open contact form"}
      >
        {open ? <MdClose size={26} /> : <MdChat size={26} />}
      </button>

      {/* ── BUBBLE PANEL ── */}
      {open && (
        <div className="ct-bubble" role="dialog" aria-modal="true" aria-label="Contact form">
          <div className="ct-header">
            <p className="ct-header-label">Get in Touch</p>
            <h2 className="ct-header-title">Contact Us</h2>
            <p className="ct-header-sub">We'll respond within 24 hours.</p>
          </div>

          {success ? (
            <div className="ct-success">
              <MdCheckCircle className="ct-success-icon" />
              <p className="ct-success-title">Message Sent!</p>
              <p className="ct-success-sub">
                Thank you for reaching out. Our team will get back to you shortly.
              </p>
              <button className="ct-success-back" onClick={() => setSuccess(false)}>
                Send Another →
              </button>
            </div>
          ) : (
            <form
              className="ct-body"
              onSubmit={(e) => handleSubmit(e, setLoading, setSuccess)}
              autoComplete="off"
            >
              <div className="ct-field">
                <label className="ct-label" htmlFor="name">Name</label>
                <input className="ct-input" type="text" name="name" id="name" placeholder="Juan dela Cruz" required />
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="contact">Contact #</label>
                <input className="ct-input" type="text" name="contact" id="contact" placeholder="+63 9XX XXX XXXX" required />
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="email">Email</label>
                <input className="ct-input" type="email" name="email" id="email" placeholder="you@email.com" required />
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="message">Message</label>
                <textarea className="ct-textarea" name="message" id="message" placeholder="How can we help you?" required />
              </div>

              <button className="ct-submit" type="submit" disabled={loading}>
                {loading ? (
                  <span className="ct-dots"><span /><span /><span /></span>
                ) : (
                  <><MdSend size={16} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Contact;
