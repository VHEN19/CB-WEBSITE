// src/pages/Services/serviceOverview.js
import React from "react";
import "./styles/services.css";



const ServicesOverview = () => {
    return (
        <div className="services-page">

            {/* HERO IMAGE CONTAINER */}
            <section
                id="services"
                className="services-hero"
                style={{
                    backgroundImage: "url('https://tinyurl.com/25rmtkfd')"
                }}
            >
                <div className="services-hero-overlay">
                    <h1>Your On-Demand Marketing Partner</h1>
                    <p>Helping local businesses grow through smart digital strategies</p>
                    <a href="/services" className="hero-btn">Learn More</a>
                </div>
            </section>

            {/* WHY US */}
            <section className="services-offer">
                <h2>Service we Offer </h2>

                <div className="service-grid">
                    <div className="service-card">
                        <h3>Backfill Sourcing / Land Sourcing</h3>
                    </div>

                    <div className="service-card">
                        <h3>Land Development</h3>
                    </div>

                    <div className="service-card">
                        <h3>Site Management</h3>
                    </div>

                    <div className="service-card">
                        <h3>Equipment Leasing </h3>
                    </div>


                </div>
            </section>



        </div>
    );
};

export default ServicesOverview;
