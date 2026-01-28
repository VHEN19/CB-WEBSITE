import "./Contact.css";

import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    const formData = new FormData(event.target);
    formData.append("access_key", "a41a3634-1116-41fc-b6d8-e97769b89da0");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      if (res.success) {
        setSuccess(true);
        event.target.reset();
      }
    } catch (err) {
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2><span className="blue">Get</span> <span className="orange">in Touch</span></h2>
          <p className="desc">We'd love to hear from you! Reach out with any questions or feedback.</p>
          <div className="info-list">
            <div className="info-item">
              <span className="icon"><MdEmail /></span>
              <span className="info-label">Email:</span>
              <span className="info-value">cliberduche.corp@yahoo.com</span>
            </div>
            <div className="info-item">
              <span className="icon"><MdPhone /></span>
              <span className="info-label">Phone:</span>
              <span className="info-value">+63 949-546-6107 / +63 967-302-6643</span>
            </div>
            <div className="info-item">
              <span className="icon"><MdLocationOn /></span>
              <span className="info-label">Address:</span>
              <span className="info-value">Lot 3739 National Highway, 3/F CBD Building Brgy. Pulo, Cabuyao City, Laguna, Philippines</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={onSubmit} autoComplete="off">
            <h2>
              <span className="blue">Send</span> <span className="orange">Us a Message</span>
            </h2>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="field" placeholder="Your Name" name="name" id="name" required />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="field" placeholder="Your Email" name="email" id="email" required />
            </div>
            <div className="input-box">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" className="field mess" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
            {success && (
              <div className="success-message">Thank you! Your message has been sent.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;