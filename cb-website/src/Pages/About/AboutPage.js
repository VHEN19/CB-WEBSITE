import { useEffect, useRef, useState } from "react";
import "./Components/styles/AboutPage.css";

const aboutData = [
  {
    title: "Our Mission",
    icon: "🎯",
    accent: "#F59E0B",
    content:
      "To provide sustainable and high-quality land development solutions that empower Filipino families and communities, while upholding the highest standards of safety, integrity, and environmental responsibility.",
  },
  {
    title: "Our Vision",
    icon: "🔭",
    accent: "#3B82F6",
    content:
      "To become the most trusted name in Philippine construction and land development — a company where excellence meets purpose, and where every project leaves a lasting legacy for generations to come.",
  },
  {
    title: "Our Values",
    icon: "⚖️",
    accent: "#10B981",
    content:
      "Integrity • Innovation • Excellence\nSafety • Sustainability • Community\n\nThese pillars guide every decision we make, every project we undertake, and every relationship we build.",
  },
];

const orgData = [
  {
    role: "PRESIDENT / CEO / CHIEF OF SITE OPERATION",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Ronaldo Climaco",
    initial: "",
  },
  {
    role: "VICE PRESIDENT",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Maria Bella Climaco",
    initial: "",
  },
  {
    role: "MARKETING MANAGER / ENGINEERING MANAGER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Rheamie Alberastine",
    initial: "",
  },
  {
    role: "ACCOUNTING HEAD",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Maria Cristina Dino",
    initial: "M",
  },
  {
    role: "FIELD AGENT",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Rommel Matias",
    initial: "R",
  },
  {
    role: "PROJECT MANAGER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Genesis De Guzman",
    initial: "G",
  },
  {
    role: "PROJECT MANAGER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Col. Jose Caringal",
    initial: "",
  },
  {
    role: "PURCHASING HEAD",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Benilda Padilla",
    initial: "",
  },
  {
    role: "PURCHASING OFFICER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "IVAN ROY CLIMACO",
    initial: "",
  },
  {
    role: "HEAD-HR ADMIN & LEGAL",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Ofelia Macaldo",
    initial: "",
  },
  {
    role: "HR ADMIN OFFICER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "IAN CLIMACO",
    initial: "",
  },
  {
    role: "LEGAL OFFICER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Atty. Paulo Punzalan",
    initial: "",
  },
  {
    role: "LEGAL OFFICER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Atty. Dante Manguiat",
    initial: "",
  },
  {
    role: "SENIOR ENGINEER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Aldwin Miranda",
    initial: "",
  },
  {
    role: "SITE FOREMAN",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Lucas Martinez",
    initial: "",
  },
  {
    role: "SUPERVISOR / SAFETY OFFICER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Rolisdio Climaco",
    initial: "",
  },
  {
    role: "SITE FOREMAN",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Renato Nebrida",
    initial: "",
  },
  {
    role: "QA / QC ENGINEER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Katleen Mae Martinez",
    initial: "",
  },
  {
    role: "SITE ENGINEER",
    image: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    name: "Persues Sarte",
    initial: "",
  },
];

const CARD_WIDTH = 250; // width per org card
const CARD_GAP = 16;    // gap between cards

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function AboutSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animDir, setAnimDir] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const [heroRef, heroInView] = useInView();
  const [cardsRef, cardsInView] = useInView();
  const [histRef, histInView] = useInView();
  const [orgRef, orgInView] = useInView();

  // Slider logic
  const CARDS_PER_VIEW = 4; // show 4 cards at once
  const maxIndex = Math.max(orgData.length - CARDS_PER_VIEW, 0);
  const translateX = -(slideIndex * (CARD_WIDTH + CARD_GAP));

  const goNext = () => {
    if (isAnimating || slideIndex >= maxIndex) return;
    setAnimDir("left");
    setIsAnimating(true);
    setTimeout(() => {
      setSlideIndex((i) => i + 1);
      setAnimDir(null);
      setIsAnimating(false);
    }, 300);
  };

  const goPrev = () => {
    if (isAnimating || slideIndex <= 0) return;
    setAnimDir("right");
    setIsAnimating(true);
    setTimeout(() => {
      setSlideIndex((i) => i - 1);
      setAnimDir(null);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div id="aboutpage" className="about-wrap">
      {/* HERO */}
      <div ref={heroRef} className={`hero-block${heroInView ? " in-view" : ""}`}>
        <div className="hero-stripe" />
        <div className="hero-eyebrow">Est. 2018</div>
        <h1 className="hero-title">
          About <span>Cliberduche</span><br />Corporation
        </h1>
        <div className="hero-divider" />
        <p className="hero-text">
          Founded in 2018, CLIBERDUCHE CORPORATION was born out of the dream of providing a better life for Filipino families. The founders saw opportunity in the construction industry and officially registered the company with the Securities and Exchange Commission on November 28, 2018. The name CLIBERDUCHE represents the surnames of the founders: <strong>CLI</strong>maco, <strong>BER</strong>onilla, and Pia<strong>DUCHE</strong>.
        </p>
        <div className="hero-badge">
          <span>🏗️ Construction</span>
          <span>🌿 Sustainability</span>
          <span>🇵🇭 Philippines</span>
        </div>
      </div>

      {/* MISSION / VISION / VALUES */}
      <div className="section-shell">
        <div className="section-label">Who We Are</div>
        <h2 className="section-heading">Mission, Vision &amp; <em>Values</em></h2>
        <div className="section-rule" />
        <div ref={cardsRef} className={`cards-block${cardsInView ? " in-view" : ""}`}>
          <div className="cards-grid">
            {aboutData.map((item, i) => (
              <div className="mvv-card" key={i} style={{ "--card-accent": item.accent }}>
                <div className="card-icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HISTORY */}
      <div ref={histRef} className={`history-wrap${histInView ? " in-view" : ""}`}>
        <div className="history-inner">
          <div className="history-graphic">
            {[
              { year: "2018", icon: "🏛️", title: "Founded", desc: "CLIBERDUCHE CORPORATION officially incorporated on November 28, 2018." },
              { year: "2019", icon: "⛏️", title: "First Major Projects", desc: "Delivered backfill and sub-base materials to landmark construction sites across Luzon." },
              { year: "2021", icon: "🌱", title: "Environmental Commitment", desc: "Adopted rigorous environmental stewardship protocols aligned with Philippine regulations." },
              { year: "2023", icon: "🚀", title: "Continued Growth", desc: "Expanded operations nationwide, creating hundreds of Filipino jobs." },
            ].map((t, i) => (
              <div className="timeline-item" key={i}>
                <div className="tl-dot">{t.icon}</div>
                <div className="tl-content">
                  <h4>{t.year} — {t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="history-text">
            <div className="section-label">Our Story</div>
            <h2 className="section-heading">Building the <em>Future</em> of the Philippines</h2>
            <div className="section-rule" />
            <p>
              Since its establishment, CLIBERDUCHE CORPORATION has focused on responsible land development and infrastructure support. By supplying high-quality backfill and sub-base materials, the company has played a vital role in construction projects across the Philippines.
            </p>
            <p>
              With a strong commitment to environmental stewardship and compliance with Philippine regulations, CLIBERDUCHE has built a reputation for integrity, safety, and quality. Beyond construction, the company contributes to the national economy by creating employment opportunities and supporting community development.
            </p>
            <div className="stat-row">
              <div className="stat-item">
                <span className="stat-num">6+</span>
                <span className="stat-label">Years Active</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Filipino</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LEADERSHIP SLIDER */}
      <div ref={orgRef} className={`org-wrap${orgInView ? " in-view" : ""}`}>
        <div className="org-header">
          <div>
            <div className="section-label">Meet the Team</div>
            <h2 className="section-heading">Our <em>Leadership</em></h2>
            <div className="section-rule" style={{ marginBottom: 0 }} />
          </div>
          <div className="org-controls">
            <button className="ctrl-btn" onClick={goPrev} disabled={slideIndex <= 0}>&#8592;</button>
            <button className="ctrl-btn" onClick={goNext} disabled={slideIndex >= maxIndex}>&#8594;</button>
          </div>
        </div>

        <div className="slider-track-outer">
          <div
            className={`slider-track${animDir ? ` anim-${animDir}` : ""}`}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {orgData.map((item, i) => (
              <div className="org-card" key={i} style={{ minWidth: CARD_WIDTH }}>
                <div className="org-img-wrap">
                  <img src={item.image} alt={item.role} />
                  <div className="org-img-overlay" />
                </div>
                <div className="org-card-body">
                  <div className="org-card-role">{item.role}</div>
                  <div className="org-card-name">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="org-dot-row">
          {orgData.map((_, i) => (
            <div
              key={i}
              className={`org-dot${i === slideIndex ? " active" : ""}`}
              onClick={() => !isAnimating && setSlideIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
