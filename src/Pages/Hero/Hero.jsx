import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import slide1Img from "../img/seo3.jpg";
import slide2Img from "../img/web.png";
import slide3Img from "../img/lead.png";

const SLIDES = [
  {
    id: 0,
    image: slide1Img,
    tag: "Strategic SEO",
    heading: "Strategic SEO That",
    highlight: "Drives Real Growth",
    sub: "We craft data-driven SEO strategies that help your business rank higher, attract quality traffic, and turn visibility into measurable revenue growth.",
    cta1Label: "Get Started Today",
    cta1Link: "/contact",
    cta2Label: "View Case Studies",
    cta2Link: "/case-studies",
  },
  {
    id: 1,
    image: slide2Img,
    tag: "Premium Web Design",
    heading: "Websites Built to",
    highlight: "Impress & Convert",
    sub: "Fast, modern, mobile-first websites designed to elevate your brand, build trust instantly, and convert visitors into paying customers.",
    cta1Label: "Get Started Today",
    cta1Link: "/contact",
    cta2Label: "View Portfolio",
    cta2Link: "/case-studies",
  },
  {
    id: 2,
    image: slide3Img,
    tag: "Lead Generation",
    heading: "Predictable Leads,",
    highlight: "Scalable Revenue",
    sub: "From paid ads to high-converting landing pages, we build complete lead generation systems that consistently bring in qualified leads for growth-focused businesses.",
    cta1Label: "Get Started Today",
    cta1Link: "/contact",
    cta2Label: "How It Works",
    cta2Link: "/services",
  },
];

const INTERVAL = 5000;
const FADE_DURATION = 400;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, FADE_DURATION);
    },
    [animating, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setAnimating(false);
      }, FADE_DURATION);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [current]);

  const slide = SLIDES[current];

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
            linear-gradient(to bottom, rgba(6,15,30,0.48) 0%, rgba(6,15,30,0.36) 28%, rgba(6,15,30,0.76) 100%),
            linear-gradient(to right, rgba(6,15,30,0.56) 0%, rgba(6,15,30,0.16) 50%, rgba(6,15,30,0.56) 100%);
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
          padding: 106px 24px 90px;
        }

        .hero-content {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(15,163,163,0.24);
          background: rgba(15,163,163,0.10);
          color: #99E1E1;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 22px;
          backdrop-filter: blur(8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .hero-h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 800;
          line-height: 1.01;
          letter-spacing: -0.04em;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .hero-highlight {
          display: block;
          margin-top: 2px;
          margin-bottom: 20px;
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 800;
          line-height: 1.01;
          letter-spacing: -0.04em;
          background: linear-gradient(90deg, #0FA3A3 0%, #6ED8D8 42%, #D4A437 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .hero-sub {
          max-width: 720px;
          margin: 0 auto 32px;
          color: rgba(228,236,244,0.92);
          font-size: clamp(1rem, 1.8vw, 1.08rem);
          line-height: 1.8;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-out {
          opacity: 0;
          transform: translateY(10px);
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 16px;
          text-decoration: none;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #0FA3A3 0%, #0D8F8F 100%);
          box-shadow: 0 12px 32px rgba(15,163,163,0.28);
          transition: all 0.25s ease;
        }

        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(15,163,163,0.38);
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
          padding: 15px 30px;
          border-radius: 16px;
          text-decoration: none;
          color: #E4EDF6;
          font-size: 15px;
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
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(6,15,30,0.28);
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
          bottom: 28px;
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
            padding: 96px 20px 86px;
          }

          .hero-arrow {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-container {
            padding: 90px 16px 82px;
          }

          .hero-buttons {
            flex-direction: column;
            max-width: 320px;
            margin: 0 auto;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
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
        <ChevronLeft size={20} />
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={() => goTo((current + 1) % SLIDES.length)}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="hero-container">
        <div className="hero-content">
          <div className={`hero-tag ${animating ? "fade-out" : "fade-in"}`}>
            {slide.tag}
          </div>

          <h1 className={`hero-h1 ${animating ? "fade-out" : "fade-in"}`}>
            {slide.heading}
          </h1>

          <span className={`hero-highlight ${animating ? "fade-out" : "fade-in"}`}>
            {slide.highlight}
          </span>

          <p className={`hero-sub ${animating ? "fade-out" : "fade-in"}`}>
            {slide.sub}
          </p>

          <div className={`hero-buttons ${animating ? "fade-out" : "fade-in"}`}>
            <Link to={slide.cta1Link} className="hero-btn-primary">
              <span>{slide.cta1Label}</span>
              <ArrowRight size={18} className="btn-arrow" />
            </Link>

            <Link to={slide.cta2Link} className="hero-btn-secondary">
              {slide.cta2Label}
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



// import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
// import slide1Img from "../img/seo3.jpg";
// import slide2Img from "../img/web.png";
// import slide3Img from "../img/lead.png";

// const SLIDES = [
//   { id: 0, image: slide1Img },
//   { id: 1, image: slide2Img },
//   { id: 2, image: slide3Img },
// ];

// const HERO_CONTENT = {
//   tag: "YOUR GROWTH ARCHITECT",
//   heading: "Digital Growth Solutions",
//   highlight: "for Australian Businesses",
//   sub: "Strategic SEO, High-Performance Websites and Lead Generation Systems",
//   cta1Label: "Book Free Growth Consultation",
//   cta1Link: "/contact",
//   cta2Label: "Get Free Website Audit",
//   cta2Link: "/contact",
// };

// const INTERVAL = 5000;

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const goTo = useCallback(
//     (index) => {
//       if (animating || index === current) return;

//       setAnimating(true);

//       setTimeout(() => {
//         setCurrent(index);
//         setAnimating(false);
//       }, 500);
//     },
//     [animating, current]
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setAnimating(true);

//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % SLIDES.length);
//         setAnimating(false);
//       }, 500);
//     }, INTERVAL);

//     return () => clearInterval(timer);
//   }, [current]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") {
//         goTo((current + 1) % SLIDES.length);
//       }
//       if (e.key === "ArrowLeft") {
//         goTo((current - 1 + SLIDES.length) % SLIDES.length);
//       }
//     };

//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [current, goTo]);

//   return (
//     <section className="hero-root" aria-label="Hero Section" role="region">
//       <style>{`
//         .hero-root {
//           position: relative;
//           width: 100%;
//           min-height: 100vh;
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #060F1E;
//           font-family: 'Inter', 'Segoe UI', sans-serif;
//         }

//         .hero-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//           will-change: opacity, transform;
//           transform: scale(1.08);
//           transition: opacity 0.7s ease, transform 6s ease;
//         }
//         .hero-bg.active {
//           opacity: 1;
//           transform: scale(1);
//         }
//         .hero-bg.inactive {
//           opacity: 0;
//           transform: scale(1.08);
//         }

//         .hero-overlay-dark {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(6,15,30,0.80) 0%,
//             rgba(6,15,30,0.60) 40%,
//             rgba(6,15,30,0.88) 100%
//           );
//           z-index: 1;
//         }

//         .hero-overlay-teal {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             ellipse 80% 60% at 50% 0%,
//             rgba(15,163,163,0.22) 0%,
//             transparent 70%
//           );
//           z-index: 2;
//         }

//         .hero-overlay-gold {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 40%;
//           background: linear-gradient(
//             to top,
//             rgba(212,164,55,0.10) 0%,
//             transparent 100%
//           );
//           z-index: 2;
//         }

//         .hero-noise {
//           position: absolute;
//           inset: 0;
//           opacity: 0.04;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//           background-size: 180px;
//           z-index: 3;
//           pointer-events: none;
//         }

//         .hero-content {
//           position: relative;
//           z-index: 10;
//           width: 100%;
//           max-width: 980px;
//           margin: 0 auto;
//           padding: 140px 24px 110px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//         }

//         .hero-tag {
//           display: inline-flex;
//           align-items: center;
//           padding: 10px 20px;
//           border-radius: 999px;
//           border: 1px solid rgba(15,163,163,0.35);
//           background: rgba(15,163,163,0.12);
//           backdrop-filter: blur(12px);
//           color: #7EDEDE;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           margin-bottom: 24px;
//           transition: opacity 0.45s ease, transform 0.45s ease;
//         }

//         .hero-h1 {
//           color: #ffffff;
//           font-size: clamp(2.4rem, 5vw, 4.8rem);
//           font-weight: 800;
//           line-height: 1.08;
//           letter-spacing: -0.03em;
//           margin: 0;
//           transition: opacity 0.45s ease, transform 0.45s ease;
//         }

//         .hero-highlight {
//           display: block;
//           background: linear-gradient(90deg, #0FA3A3 0%, #5ED4D4 45%, #D4A437 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           font-size: clamp(2.2rem, 5vw, 4.6rem);
//           font-weight: 800;
//           line-height: 1.12;
//           margin: 8px 0 24px;
//           transition: opacity 0.45s ease, transform 0.45s ease;
//         }

//         .hero-sub {
//           color: rgba(220,230,240,0.92);
//           font-size: clamp(1rem, 1.8vw, 1.2rem);
//           line-height: 1.8;
//           max-width: 760px;
//           margin: 0 auto 38px;
//           transition: opacity 0.45s ease, transform 0.45s ease;
//         }

//         .hero-buttons {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 14px;
//           justify-content: center;
//           transition: opacity 0.45s ease, transform 0.45s ease;
//         }

//         .fade-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .fade-out {
//           opacity: 0;
//           transform: translateY(16px);
//         }

//         .hero-btn-primary {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 15px 30px;
//           border-radius: 14px;
//           background: linear-gradient(135deg, #0FA3A3 0%, #0D8F8F 100%);
//           color: #fff;
//           font-size: 15px;
//           font-weight: 700;
//           text-decoration: none;
//           box-shadow: 0 10px 30px rgba(15,163,163,0.35);
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//           overflow: hidden;
//         }

//         .hero-btn-primary:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 16px 38px rgba(15,163,163,0.45);
//         }

//         .hero-btn-primary .btn-arrow {
//           transition: transform 0.25s ease;
//         }

//         .hero-btn-primary:hover .btn-arrow {
//           transform: translateX(4px);
//         }

//         .hero-btn-secondary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 15px 30px;
//           border-radius: 14px;
//           background: rgba(15,42,68,0.45);
//           color: #D8E3EE;
//           font-size: 15px;
//           font-weight: 600;
//           text-decoration: none;
//           border: 1.5px solid rgba(15,163,163,0.30);
//           backdrop-filter: blur(12px);
//           transition: all 0.25s ease;
//         }

//         .hero-btn-secondary:hover {
//           transform: translateY(-3px);
//           border-color: rgba(212,164,55,0.55);
//           color: #fff;
//           background: rgba(15,42,68,0.65);
//           box-shadow: 0 8px 24px rgba(212,164,55,0.15);
//         }

//         .hero-dots {
//           position: absolute;
//           bottom: 36px;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 20;
//           display: flex;
//           gap: 10px;
//           align-items: center;
//         }

//         .hero-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 999px;
//           background: rgba(255,255,255,0.28);
//           border: none;
//           cursor: pointer;
//           transition: width 0.35s ease, background 0.35s ease;
//           padding: 0;
//         }

//         .hero-dot.active {
//           width: 34px;
//           background: linear-gradient(90deg, #0FA3A3, #D4A437);
//         }

//         .hero-dot:hover:not(.active) {
//           background: rgba(255,255,255,0.55);
//         }

//         .hero-progress-bar {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #0FA3A3, #D4A437);
//           z-index: 20;
//           animation: heroProgress ${INTERVAL}ms linear infinite;
//         }

//         @keyframes heroProgress {
//           from { width: 0%; }
//           to { width: 100%; }
//         }

//         .hero-arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 20;
//           width: 48px;
//           height: 48px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(15,163,163,0.35);
//           background: rgba(6,15,30,0.55);
//           backdrop-filter: blur(10px);
//           color: #fff;
//           font-size: 18px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.25s ease;
//         }

//         .hero-arrow:hover {
//           background: rgba(15,163,163,0.25);
//           border-color: rgba(15,163,163,0.70);
//           transform: translateY(-50%) scale(1.08);
//         }

//         .hero-arrow-left { left: 20px; }
//         .hero-arrow-right { right: 20px; }

//         .hero-counter {
//           position: absolute;
//           top: 120px;
//           right: 28px;
//           z-index: 20;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-end;
//           gap: 6px;
//         }

//         .hero-counter-num {
//           font-size: 36px;
//           font-weight: 800;
//           color: rgba(255,255,255,0.08);
//           line-height: 1;
//           letter-spacing: -0.03em;
//         }

//         .hero-counter-label {
//           font-size: 10px;
//           font-weight: 600;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: rgba(15,163,163,0.60);
//         }

//         @media (max-width: 640px) {
//           .hero-content {
//             padding: 120px 20px 90px;
//           }

//           .hero-arrow,
//           .hero-counter {
//             display: none;
//           }

//           .hero-buttons {
//             flex-direction: column;
//             width: 100%;
//             max-width: 320px;
//           }

//           .hero-btn-primary,
//           .hero-btn-secondary {
//             justify-content: center;
//             width: 100%;
//           }
//         }
//       `}</style>

//       {/* Background Images */}
//       {SLIDES.map((s, i) => (
//         <div
//           key={i}
//           className={`hero-bg ${i === current ? "active" : "inactive"}`}
//           style={{ backgroundImage: `url(${s.image})` }}
//           aria-hidden="true"
//         />
//       ))}

//       {/* Overlays */}
//       <div className="hero-overlay-dark" aria-hidden="true" />
//       <div className="hero-overlay-teal" aria-hidden="true" />
//       <div className="hero-overlay-gold" aria-hidden="true" />
//       <div className="hero-noise" aria-hidden="true" />

//       {/* Counter */}
//       <div className="hero-counter" aria-hidden="true">
//         <span className="hero-counter-num">0{current + 1}</span>
//         <span className="hero-counter-label">/ 0{SLIDES.length}</span>
//       </div>

//       {/* Arrows */}
//       <button
//         className="hero-arrow hero-arrow-left"
//         onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
//         aria-label="Previous slide"
//       >
//         &#8592;
//       </button>

//       <button
//         className="hero-arrow hero-arrow-right"
//         onClick={() => goTo((current + 1) % SLIDES.length)}
//         aria-label="Next slide"
//       >
//         &#8594;
//       </button>

//       {/* Content */}
//       <div className="hero-content">
//         <div className={`hero-tag ${animating ? "fade-out" : "fade-in"}`}>
//           {HERO_CONTENT.tag}
//         </div>

//         <h1 className={`hero-h1 ${animating ? "fade-out" : "fade-in"}`}>
//           {HERO_CONTENT.heading}
//         </h1>

//         <span
//           className={`hero-highlight ${animating ? "fade-out" : "fade-in"}`}
//         >
//           {HERO_CONTENT.highlight}
//         </span>

//         <p className={`hero-sub ${animating ? "fade-out" : "fade-in"}`}>
//           {HERO_CONTENT.sub}
//         </p>

//         <div className={`hero-buttons ${animating ? "fade-out" : "fade-in"}`}>
//           <Link to={HERO_CONTENT.cta1Link} className="hero-btn-primary">
//             <span>{HERO_CONTENT.cta1Label}</span>
//             <span className="btn-arrow">→</span>
//           </Link>

//           <Link to={HERO_CONTENT.cta2Link} className="hero-btn-secondary">
//             {HERO_CONTENT.cta2Label}
//           </Link>
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="hero-dots" role="tablist" aria-label="Slide navigation">
//         {SLIDES.map((_, i) => (
//           <button
//             key={i}
//             role="tab"
//             aria-selected={i === current}
//             aria-label={`Go to slide ${i + 1}`}
//             className={`hero-dot ${i === current ? "active" : ""}`}
//             onClick={() => goTo(i)}
//           />
//         ))}
//       </div>

//       {/* Progress bar */}
//       <div className="hero-progress-bar" key={current} aria-hidden="true" />
//     </section>
//   );
// };

// export default Hero;