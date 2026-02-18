import { useState, useEffect, useRef } from "react";
import { slides, features } from "./Components/data";
import "./Home.css";



/* ─── COMPONENT ──────────────────────────────────────────── */
export default function Home() {
  const [active, setActive] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active) return;
    setPrevIdx(active);
    setActive(idx);
    setTimeout(() => setPrevIdx(null), 700);
  };

  const next = () => goTo((active + 1) % slides.length);
  const prev = () => goTo((active - 1 + slides.length) % slides.length);

  // auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [active]);

  const resetTimer = (fn) => {
    clearInterval(timerRef.current);
    fn();
  };

  return (
    <>
      
      <section id="home" className="hm-section">
        <div className="hm-slash" />

        <div className="hm-container">

          {/* ── HERO TEXT ── */}
          <p className="hm-eyebrow">Est. 2018 · Philippines</p>

          <h1 className="hm-headline">
            Building<br />
            <span>Tomorrow's</span>
            Foundation
          </h1>

          <p className="hm-tagline">
            Cliberduche Corporation delivers high-quality land development,
            backfill supply, and infrastructure solutions engineered for
            lasting impact across the Philippines.
          </p>

          {/* <div className="hm-cta-row">
            <button className="hm-btn-primary">
              ▶ &nbsp;Our Projects
            </button>
            <button className="hm-btn-ghost">
              Contact Us →
            </button>
          </div> */}

          {/* ── STATS ── */}
          <div className="hm-stats">
            {[
              { num: "8+",   label: "Years Active" },
              { num: "50+",  label: "Projects Done" },
              { num: "100%", label: "Filipino-Owned" },
              // { num: "SEC",  label: "Registered" },
            ].map((s, i) => (
              <div key={i}>
                <div className="hm-stat-num">{s.num}</div>
                <div className="hm-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── FEATURE CARDS ── */}
          <div className="hm-features">
            {features.map((f, i) => (
              <div className="hm-feat-card" key={i}>
                <span className="hm-feat-icon">{f.icon}</span>
                <div className="hm-feat-title">{f.title}</div>
                <div className="hm-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>

          {/* ── PROJECT CAROUSEL ── */}
          <div className="hm-carousel-wrap">
            <div className="hm-carousel-track">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className={`hm-slide${
                    i === active ? " active" : i === prevIdx ? " prev" : ""
                  }`}
                >
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="hm-caption">
                    <span className="hm-caption-tag">{s.tag}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="hm-caption-stat">📐 {s.stat}</span>
                  </div>
                </div>
              ))}

              {/* Arrow nav */}
              <div className="hm-car-nav">
                <button
                  className="hm-nav-btn"
                  onClick={() => resetTimer(prev)}
                  aria-label="Previous"
                >
                  &#8592;
                </button>
                <button
                  className="hm-nav-btn"
                  onClick={() => resetTimer(next)}
                  aria-label="Next"
                >
                  &#8594;
                </button>
              </div>
            </div>

            {/* Progress dots */}
            <div className="hm-car-progress">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`hm-prog-dot${i === active ? " active" : ""}`}
                  onClick={() => resetTimer(() => goTo(i))}
                  role="button"
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
