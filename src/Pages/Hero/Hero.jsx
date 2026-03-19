import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import slide1Img from "../img/seo3.jpg";
import slide2Img from "../img/web.png";
import slide3Img from "../img/lead.png";

const SLIDES = [
  { id: 0, image: slide1Img },
  { id: 1, image: slide2Img },
  { id: 2, image: slide3Img },
];

const HERO_CONTENT = {
  tag: "YOUR GROWTH ARCHITECT",
  heading: "Digital Growth Solutions",
  highlight: "for Australian Businesses",
  sub: "Strategic SEO, High-Performance Websites and Lead Generation Systems",
  cta1Label: "Book Free Growth Consultation",
  cta1Link: "/contact",
  cta2Label: "Get Free Website Audit",
  cta2Link: "/contact",
};

const INTERVAL = 5000;

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-root" aria-label="Hero Section">
      <style>{`
        .hero-root {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background: #060F1E;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity 0.8s ease, transform 6s ease;
          transform: scale(1.04);
        }

        .hero-bg.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-bg.inactive {
          opacity: 0;
          transform: scale(1.04);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(6,15,30,0.58) 0%, rgba(6,15,30,0.46) 30%, rgba(6,15,30,0.84) 100%),
            linear-gradient(to right, rgba(6,15,30,0.62) 0%, rgba(6,15,30,0.22) 50%, rgba(6,15,30,0.62) 100%);
          z-index: 1;
        }

        .hero-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 55% 38% at 50% 0%, rgba(15,163,163,0.10) 0%, transparent 72%);
          z-index: 2;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 102px 24px 88px;
        }

        .hero-content {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1px solid rgba(15,163,163,0.24);
          background: rgba(15,163,163,0.10);
          color: #99E1E1;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 18px;
          backdrop-filter: blur(8px);
        }

        .hero-h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(2.25rem, 4.3vw, 4.15rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.035em;
          text-shadow: 0 8px 30px rgba(0,0,0,0.18);
        }

        .hero-highlight {
          display: block;
          margin-top: 4px;
          margin-bottom: 16px;
          font-size: clamp(2.2rem, 4.2vw, 4rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.035em;
          background: linear-gradient(90deg, #0FA3A3 0%, #6ED8D8 42%, #D4A437 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
        }

        .hero-sub {
          max-width: 660px;
          margin: 0 auto 28px;
          color: rgba(228,236,244,0.90);
          font-size: clamp(0.96rem, 1.45vw, 1rem);
          line-height: 1.75;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 26px;
          border-radius: 15px;
          text-decoration: none;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          background: linear-gradient(135deg, #0FA3A3 0%, #0D8F8F 100%);
          box-shadow: 0 12px 28px rgba(15,163,163,0.24);
          transition: all 0.25s ease;
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 36px rgba(15,163,163,0.34);
        }

        .hero-btn-primary .btn-arrow {
          transition: transform 0.25s ease;
        }

        .hero-btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 26px;
          border-radius: 15px;
          text-decoration: none;
          color: #E4EDF6;
          font-size: 14px;
          font-weight: 600;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .hero-btn-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.10);
          border-color: rgba(212,164,55,0.35);
          color: #fff;
        }

        .hero-arrow {
          position: absolute;
          top: 54%;
          transform: translateY(-50%);
          z-index: 20;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(6,15,30,0.30);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .hero-arrow:hover {
          transform: translateY(-50%) scale(1.05);
          background: rgba(15,163,163,0.18);
          border-color: rgba(15,163,163,0.38);
        }

        .hero-arrow-left {
          left: 24px;
        }

        .hero-arrow-right {
          right: 24px;
        }

        .hero-dots {
          position: absolute;
          bottom: 26px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: none;
          padding: 0;
          background: rgba(255,255,255,0.28);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-dot.active {
          width: 34px;
          background: linear-gradient(90deg, #0FA3A3, #D4A437);
        }

        .hero-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #0FA3A3, #D4A437);
          z-index: 20;
          animation: heroProgress ${INTERVAL}ms linear infinite;
        }

        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 92px 20px 82px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-h1 {
            font-size: clamp(2rem, 6vw, 3rem);
          }

          .hero-highlight {
            font-size: clamp(1.95rem, 5.8vw, 2.9rem);
          }

          .hero-sub {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .hero-arrow {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-container {
            padding: 84px 16px 78px;
          }

          .hero-tag {
            font-size: 9px;
            padding: 7px 14px;
            margin-bottom: 16px;
          }

          .hero-h1 {
            font-size: 1.95rem;
            line-height: 1.08;
          }

          .hero-highlight {
            font-size: 1.9rem;
            margin-bottom: 14px;
            line-height: 1.08;
          }

          .hero-sub {
            font-size: 0.92rem;
            margin-bottom: 24px;
          }

          .hero-buttons {
            flex-direction: column;
            max-width: 310px;
            margin: 0 auto;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            font-size: 13.5px;
            padding: 13px 22px;
          }
        }
      `}</style>

      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`hero-bg ${i === current ? "active" : "inactive"}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden="true"
        />
      ))}

      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <button
        className="hero-arrow hero-arrow-left"
        onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={() => goTo((current + 1) % SLIDES.length)}
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">{HERO_CONTENT.tag}</div>

          <h1 className="hero-h1">{HERO_CONTENT.heading}</h1>

          <span className="hero-highlight">{HERO_CONTENT.highlight}</span>

          <p className="hero-sub">{HERO_CONTENT.sub}</p>

          <div className="hero-buttons">
            <Link to={HERO_CONTENT.cta1Link} className="hero-btn-primary">
              <span>{HERO_CONTENT.cta1Label}</span>
              <ArrowRight size={17} className="btn-arrow" />
            </Link>

            <Link to={HERO_CONTENT.cta2Link} className="hero-btn-secondary">
              {HERO_CONTENT.cta2Label}
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="hero-progress" key={current} aria-hidden="true" />
    </section>
  );
};

export default Hero;