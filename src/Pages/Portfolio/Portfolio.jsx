import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  Sparkles,
  Eye,
  Rocket,
  Star,
  Zap,
  Monitor,
  PlayCircle,
  ChevronRight,
  Award,
  TrendingUp,
  Globe,
  Palette,
  Layout,
  MousePointer,
  BarChart3,
  Play,
} from "lucide-react";

import homeServicesImg from "../img/homeservices.png";
import realEstateImg from "../img/real.png";
import lawFirmImg from "../img/law.png";
import creativeDentist from "../img/Dentist.png";
import creativeHomeServices from "../img/home.png";
import creativeLawFirm from "../img/laws.png";
import creativeLeads from "../img/leads.png";
import seoProof from "../img/seovideo.mp4";
import dentistimg from "../img/d.png";

const websiteItems = [
  {
    title: "Home Services Website",
    type: "Service Business",
    image: homeServicesImg,
    link: "https://australia-project-fe.vercel.app/",
    text: "Clean and modern service website built for home experts — seamless user experience with conversion-focused design.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    color: "#0FA3A3",
    gradient: "linear-gradient(135deg, #0FA3A3, #14B8A6)",
  },
  {
    title: "Real Estate Website",
    type: "Property Showcase",
    image: realEstateImg,
    link: "https://real-estate-flax-pi.vercel.app/",
    text: "Premium real estate platform with strong visual hierarchy, property listings and immersive browsing experience.",
    tech: ["React", "Responsive", "Modern UI"],
    color: "#D4A437",
    gradient: "linear-gradient(135deg, #D4A437, #F59E0B)",
  },
  {
    title: "Law Firm Website",
    type: "Legal Business",
    image: lawFirmImg,
    link: "https://law-firm-gamma-five.vercel.app/",
    text: "Elegant dark-themed website for a professional law firm — authority-driven design with modern sophistication.",
    tech: ["React", "Dark Theme", "Deployed"],
    color: "#A855F7",
    gradient: "linear-gradient(135deg, #A855F7, #8B5CF6)",
  },
  {
    title: "Dentist Website",
    type: "Healthcare Website",
    image: dentistimg,
    link: "https://dentist-project-flax.vercel.app/",
    text: "A trust-focused dental website built for appointment generation with a clean, professional healthcare presentation.",
    tech: ["Healthcare UI", "Responsive", "Conversion"],
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)",
  },
];

const creativeItems = [
  {
    title: "Creative Dentist Design",
    type: "Healthcare Design",
    image: creativeDentist,
    text: "Modern creative design concept for dentist branding and professional service presentation.",
    tech: ["UI Design", "Branding", "Healthcare"],
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)",
  },
  {
    title: "Creative Home Services",
    type: "Service Design",
    image: creativeHomeServices,
    text: "Creative service-focused layout concept for home service businesses and optimized lead flow.",
    tech: ["UI Design", "Layout", "Conversion"],
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)",
  },
  {
    title: "Creative Law Firm",
    type: "Legal Design",
    image: creativeLawFirm,
    text: "Luxury-inspired law firm design concept with premium business presentation and dark aesthetics.",
    tech: ["UI Design", "Dark Theme", "Legal"],
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
  },
  {
    title: "Lead Generation Creative",
    type: "Marketing Visual",
    image: creativeLeads,
    text: "Lead generation campaign creative built to support performance marketing and business growth.",
    tech: ["Marketing", "Creative", "Lead Gen"],
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
    icon: <Briefcase size={20} />,
    color: "#0FA3A3",
  },
  {
    number: "35+",
    label: "Happy Clients",
    icon: <Star size={20} />,
    color: "#D4A437",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
    icon: <Award size={20} />,
    color: "#A855F7",
  },
  {
    number: "24/7",
    label: "Dedicated Support",
    icon: <Zap size={20} />,
    color: "#06B6D4",
  },
];

const SeoVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`pf-video-section ${isVisible ? "visible" : ""}`}
    >
      <div className="pf-section-head pf-section-head-always">
        <div className="pf-section-icon">
          <TrendingUp />
        </div>
        <h2>
          SEO Proof & <span className="pf-gradient-text">Results</span>
        </h2>
        <p>
          Real performance proof showing measurable SEO growth, visibility
          improvements and search ranking results.
        </p>
        <div className="pf-section-divider" />
      </div>

      <div className="pf-video-card">
        <div className="pf-video-card-shine" />

        <div className="pf-video-wrap">
          <video
            ref={videoRef}
            className="pf-video"
            controls={isPlaying}
            playsInline
            preload="metadata"
          >
            <source src={seoProof} type="video/mp4" />
          </video>

          {!isPlaying && (
            <button className="pf-video-overlay" onClick={handlePlayVideo}>
              <div className="pf-video-ripple" />
              <div className="pf-video-ripple pf-ripple-delay" />
              <div className="pf-video-ripple pf-ripple-delay2" />
              <div className="pf-video-play-btn">
                <Play />
              </div>
              <span className="pf-video-label">Watch SEO Results</span>
            </button>
          )}
        </div>

        <div className="pf-video-info">
          <div className="pf-video-info-left">
            <span className="pf-video-badge">
              <BarChart3 size={11} />
              SEO Showcase
            </span>
            <h3>SEO Performance Proof</h3>
            <p>
              Watch real SEO growth data — from keyword rankings to organic
              traffic increases, all presented with clear measurable results.
            </p>
          </div>
          <div className="pf-video-info-stats">
            <div className="pf-video-stat">
              <span className="pf-video-stat-num">↑ 340%</span>
              <span className="pf-video-stat-label">Organic Traffic</span>
            </div>
            <div className="pf-video-stat">
              <span className="pf-video-stat-num">Top 3</span>
              <span className="pf-video-stat-label">Keyword Rankings</span>
            </div>
            <div className="pf-video-stat">
              <span className="pf-video-stat-num">↑ 280%</span>
              <span className="pf-video-stat-label">Lead Generation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [webHeadVisible, setWebHeadVisible] = useState(false);
  const [creativeHeadVisible, setCreativeHeadVisible] = useState(false);

  const cardRefs = useRef([]);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const webHeadRef = useRef(null);
  const creativeHeadRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setHeaderVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setTimeout(() => {
              setVisibleCards((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }, (index % 4) * 120);
          }

          if (entry.target === statsRef.current) setStatsVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);
          if (entry.target === webHeadRef.current) setWebHeadVisible(true);
          if (entry.target === creativeHeadRef.current)
            setCreativeHeadVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    if (statsRef.current) observer.observe(statsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (webHeadRef.current) observer.observe(webHeadRef.current);
    if (creativeHeadRef.current) observer.observe(creativeHeadRef.current);

    return () => observer.disconnect();
  }, []);

  const renderCard = (item, index, isWebsite = true) => (
    <div
      key={item.title}
      ref={(el) => (cardRefs.current[index] = el)}
      className={`pf-card ${visibleCards.includes(index) ? "visible" : ""}`}
      style={{ "--card-color": item.color }}
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
    >
      <div className="pf-card-shine" />
      <div
        className="pf-card-glow"
        style={{
          background: `radial-gradient(600px circle at 50% 0%, ${item.color}12, transparent 70%)`,
        }}
      />

      <div className="pf-img-wrap">
        <img
          src={item.image}
          alt={item.title}
          className="pf-img"
          loading="lazy"
        />
        <div className="pf-img-gradient" />
        <div className="pf-img-overlay">
          {isWebsite ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="pf-preview-btn"
            >
              <Eye size={16} /> Live Preview
            </a>
          ) : (
            <div className="pf-preview-btn">
              <Palette size={16} /> View Design
            </div>
          )}
        </div>
        <div className="pf-img-corner-badge">
          {isWebsite ? <Globe size={12} /> : <Layout size={12} />}
        </div>
      </div>

      <div className="pf-content">
        <div className="pf-type-row">
          <span
            className="pf-type"
            style={{
              background: `${item.color}12`,
              border: `1px solid ${item.color}25`,
              color: item.color,
            }}
          >
            <span className="pf-type-dot" style={{ background: item.color }} />
            {item.type}
          </span>
        </div>

        <h3>{item.title}</h3>
        <p>{item.text}</p>

        <div className="pf-tech-row">
          {item.tech.map((t) => (
            <span key={t} className="pf-tech-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="pf-card-footer">
          {isWebsite ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="pf-visit"
              style={{ background: item.gradient }}
            >
              Visit Website <ArrowRight size={14} />
            </a>
          ) : (
            <div
              className="pf-visit pf-visit-design"
              style={{
                background: `${item.color}12`,
                border: `1px solid ${item.color}30`,
                color: item.color,
              }}
            >
              Design Concept <Eye size={14} />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .pf-root {
          background: #030712;
          min-height: 100vh;
          font-family: 'Inter', -apple-system, sans-serif;
          color: #94A3B8;
          overflow-x: hidden;
          position: relative;
        }

        /* ===== BACKGROUND ===== */
        .pf-bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,163,163,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,163,163,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent);
        }

        .pf-bg-noise {
          position: fixed;
          inset: 0;
          opacity: 0.018;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .pf-bg-orb1, .pf-bg-orb2, .pf-bg-orb3 {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(100px);
        }

        .pf-bg-orb1 {
          top: -5%;
          left: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(15,163,163,0.08) 0%, transparent 70%);
          animation: pf-orb-drift 20s ease-in-out infinite;
        }

        .pf-bg-orb2 {
          bottom: -5%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%);
          animation: pf-orb-drift 25s ease-in-out infinite reverse;
        }

        .pf-bg-orb3 {
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(212,164,55,0.035) 0%, transparent 70%);
          filter: blur(120px);
          animation: pf-orb-drift 30s ease-in-out infinite;
        }

        @keyframes pf-orb-drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -20px); }
          50% { transform: translate(-20px, 30px); }
          75% { transform: translate(20px, 20px); }
        }

        .pf-cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(15,163,163,0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          transition: transform 0.15s linear;
          filter: blur(30px);
        }

        .pf-particle {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: pf-particle-float linear infinite;
        }

        @keyframes pf-particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          8% { opacity: 0.6; }
          92% { opacity: 0.6; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }

        /* ===== LAYOUT ===== */
        .pf-wrap {
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 32px 120px;
          position: relative;
          z-index: 2;
        }

        /* ===== HEADER ===== */
        .pf-header {
          text-align: center;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(15,163,163,0.1) 0%, rgba(168,85,247,0.06) 100%);
          border: 1px solid rgba(15,163,163,0.15);
          color: #0FA3A3;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: pf-badge-glow 3s ease-in-out infinite;
        }

        @keyframes pf-badge-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(15,163,163,0); }
          50% { box-shadow: 0 0 20px 0 rgba(15,163,163,0.08); }
        }

        .pf-badge svg {
          width: 14px;
          height: 14px;
          color: #D4A437;
          animation: pf-sparkle-spin 4s linear infinite;
        }

        @keyframes pf-sparkle-spin {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(1); }
          75% { transform: rotate(270deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .pf-header h1 {
          margin: 0 0 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #F8FAFC;
        }

        .pf-header h1 span {
          display: block;
          margin-top: 6px;
          background: linear-gradient(135deg, #0FA3A3 0%, #2ad0d0 30%, #D4A437 70%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: pf-gradient-shift 4s ease-in-out infinite;
        }

        @keyframes pf-gradient-shift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        .pf-header p {
          max-width: 600px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.85;
          color: #64748B;
          font-weight: 400;
        }

        .pf-header-line {
          width: 60px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #0FA3A3, #D4A437);
          margin: 28px auto 0;
          opacity: 0.5;
        }

        /* ===== STATS ===== */
        .pf-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-stats.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-stat-item {
          text-align: center;
          padding: 28px 16px;
          border-radius: 20px;
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(30,41,59,0.6);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .pf-stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--stat-color, #0FA3A3), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .pf-stat-item:hover::before {
          opacity: 0.5;
        }

        .pf-stat-item:hover {
          border-color: rgba(15,163,163,0.2);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .pf-stat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          margin-bottom: 14px;
          transition: transform 0.3s ease;
        }

        .pf-stat-item:hover .pf-stat-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .pf-stat-number {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .pf-stat-label {
          font-size: 12px;
          color: #64748B;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ===== SECTION HEADS ===== */
        .pf-section-head {
          margin: 0 0 36px;
          text-align: center;
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-section-head.visible,
        .pf-section-head-always {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-section-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(15,163,163,0.12), rgba(15,163,163,0.04));
          border: 1px solid rgba(15,163,163,0.15);
          color: #0FA3A3;
          margin-bottom: 16px;
        }

        .pf-section-icon svg {
          width: 18px;
          height: 18px;
        }

        .pf-section-head h2 {
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 3.2vw, 2.5rem);
          font-weight: 700;
          color: #F8FAFC;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }

        .pf-gradient-text {
          background: linear-gradient(135deg, #0FA3A3, #D4A437);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pf-section-head p {
          max-width: 580px;
          margin: 12px auto 0;
          font-size: 15px;
          line-height: 1.8;
          color: #64748B;
        }

        .pf-section-divider {
          width: 40px;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #0FA3A3, transparent);
          margin: 16px auto 0;
          opacity: 0.4;
        }

        /* ===== GRIDS ===== */
        .pf-grid-web, .pf-grid-creative {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ===== CARDS ===== */
        .pf-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(15,23,42,0.45);
          border: 1px solid rgba(30,41,59,0.5);
          backdrop-filter: blur(20px);
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .pf-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .pf-card:hover {
          border-color: var(--card-color, rgba(15,163,163,0.25));
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03) inset;
        }

        .pf-card-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          z-index: 5;
        }

        .pf-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 1;
        }

        .pf-card:hover .pf-card-glow {
          opacity: 1;
        }

        .pf-img-wrap {
          position: relative;
          overflow: hidden;
        }

        .pf-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
          filter: brightness(0.95);
        }

        .pf-card:hover .pf-img {
          transform: scale(1.06);
          filter: brightness(0.7);
        }

        .pf-img-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, rgba(3,7,18,0.7), transparent);
          pointer-events: none;
          z-index: 2;
        }

        .pf-img-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(3,7,18,0.5);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 3;
          backdrop-filter: blur(6px);
        }

        .pf-card:hover .pf-img-overlay {
          opacity: 1;
        }

        .pf-img-corner-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          z-index: 4;
          transition: all 0.3s ease;
        }

        .pf-card:hover .pf-img-corner-badge {
          background: var(--card-color);
          color: #fff;
          border-color: transparent;
          transform: rotate(8deg) scale(1.05);
        }

        .pf-preview-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 14px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(12px);
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
        }

        .pf-preview-btn:hover {
          background: rgba(255,255,255,0.18);
          transform: scale(1.04);
        }

        .pf-content {
          padding: 20px 22px 24px;
          position: relative;
          z-index: 2;
        }

        .pf-type-row {
          margin-bottom: 14px;
        }

        .pf-type {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'Space Grotesk', sans-serif;
        }

        .pf-type-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: pf-dot-pulse 2s ease-in-out infinite;
        }

        @keyframes pf-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .pf-content h3 {
          margin: 0 0 10px;
          font-family: 'Space Grotesk', sans-serif;
          color: #F1F5F9;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .pf-card:hover .pf-content h3 {
          color: #fff;
        }

        .pf-content p {
          margin: 0 0 16px;
          color: #64748B;
          font-size: 13.5px;
          line-height: 1.75;
          font-weight: 400;
        }

        .pf-tech-row {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .pf-tech-tag {
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 600;
          background: rgba(30,41,59,0.5);
          border: 1px solid rgba(51,65,85,0.4);
          color: #94A3B8;
          font-family: 'Space Grotesk', sans-serif;
          transition: all 0.3s ease;
        }

        .pf-card:hover .pf-tech-tag {
          background: rgba(30,41,59,0.7);
          border-color: rgba(51,65,85,0.6);
        }

        .pf-card-footer {
          padding-top: 4px;
        }

        .pf-visit {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 12.5px;
          font-weight: 700;
          color: #fff;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: 0.01em;
          border: none;
        }

        .pf-visit:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }

        .pf-visit svg {
          transition: transform 0.3s ease;
        }

        .pf-visit:hover svg {
          transform: translateX(3px);
        }

        .pf-visit-design {
          cursor: default;
        }

        .pf-visit-design:hover {
          transform: none;
          box-shadow: none;
        }

        .pf-section-gap {
          margin-top: 80px;
        }

        /* ===== VIDEO SECTION - RECTANGLE ===== */
        .pf-video-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-video-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-video-card {
          width: 100%;
          max-width: 960px;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(30,41,59,0.5);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          position: relative;
        }

        .pf-video-card:hover {
          border-color: rgba(15,163,163,0.2);
          box-shadow: 0 40px 80px rgba(0,0,0,0.3), 0 0 60px rgba(15,163,163,0.04);
          transform: translateY(-6px);
        }

        .pf-video-card-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          z-index: 10;
        }

        .pf-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #060c1a;
          overflow: hidden;
        }

        .pf-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #060c1a;
        }

        .pf-video-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background: linear-gradient(180deg, rgba(3,7,18,0.25) 0%, rgba(3,7,18,0.55) 100%);
          border: none;
          width: 100%;
          cursor: pointer;
          transition: all 0.4s ease;
          font-family: 'Inter', sans-serif;
        }

        .pf-video-overlay:hover {
          background: linear-gradient(180deg, rgba(3,7,18,0.3) 0%, rgba(3,7,18,0.6) 100%);
        }

        .pf-video-ripple {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1.5px solid rgba(15,163,163,0.15);
          animation: pf-ripple 3s ease-out infinite;
        }

        .pf-ripple-delay {
          animation-delay: 1s !important;
        }

        .pf-ripple-delay2 {
          animation-delay: 2s !important;
        }

        @keyframes pf-ripple {
          0% { transform: scale(0.5); opacity: 0.7; }
          100% { transform: scale(3); opacity: 0; }
        }

        .pf-video-play-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(15,163,163,0.25), rgba(15,163,163,0.1));
          backdrop-filter: blur(16px);
          border: 2px solid rgba(15,163,163,0.3);
          z-index: 2;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 40px rgba(15,163,163,0.1);
        }

        .pf-video-overlay:hover .pf-video-play-btn {
          transform: scale(1.1);
          background: linear-gradient(135deg, rgba(15,163,163,0.35), rgba(15,163,163,0.15));
          box-shadow: 0 0 60px rgba(15,163,163,0.18);
          border-color: rgba(15,163,163,0.5);
        }

        .pf-video-play-btn svg {
          width: 36px;
          height: 36px;
          color: #0FA3A3;
          margin-left: 3px;
          filter: drop-shadow(0 0 8px rgba(15,163,163,0.4));
        }

        .pf-video-label {
          padding: 10px 22px;
          border-radius: 999px;
          background: rgba(15,163,163,0.1);
          border: 1px solid rgba(15,163,163,0.2);
          color: #0FA3A3;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          z-index: 2;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .pf-video-overlay:hover .pf-video-label {
          background: rgba(15,163,163,0.15);
          border-color: rgba(15,163,163,0.3);
        }

        .pf-video-info {
          padding: 28px 32px 32px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 32px;
        }

        .pf-video-info-left {
          flex: 1;
        }

        .pf-video-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(15,163,163,0.1);
          border: 1px solid rgba(15,163,163,0.18);
          color: #0FA3A3;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .pf-video-info h3 {
          margin: 0 0 10px;
          color: #F1F5F9;
          font-size: 22px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .pf-video-info p {
          margin: 0;
          color: #64748B;
          font-size: 14px;
          line-height: 1.8;
          max-width: 440px;
        }

        .pf-video-info-stats {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
          padding-top: 6px;
        }

        .pf-video-stat {
          text-align: center;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(15,163,163,0.06);
          border: 1px solid rgba(15,163,163,0.12);
          min-width: 110px;
          transition: all 0.3s ease;
        }

        .pf-video-stat:hover {
          border-color: rgba(15,163,163,0.25);
          transform: translateY(-3px);
          background: rgba(15,163,163,0.09);
        }

        .pf-video-stat-num {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0FA3A3;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .pf-video-stat-label {
          font-size: 10px;
          color: #64748B;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ===== CTA ===== */
        .pf-cta {
          margin-top: 80px;
          text-align: center;
          padding: 60px 36px;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(30,41,59,0.5);
          backdrop-filter: blur(24px);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #0FA3A3, transparent);
          opacity: 0.4;
        }

        .pf-cta-bg-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(15,163,163,0.06) 0%, transparent 70%);
          pointer-events: none;
          filter: blur(60px);
        }

        .pf-cta-sparkle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(15,163,163,0.12) 0%, rgba(212,164,55,0.08) 100%);
          border: 1px solid rgba(15,163,163,0.15);
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .pf-cta:hover .pf-cta-sparkle {
          transform: rotate(-10deg) scale(1.05);
        }

        .pf-cta-sparkle svg {
          color: #0FA3A3;
          width: 22px;
          height: 22px;
        }

        .pf-cta h2 {
          margin: 0 0 14px;
          font-family: 'Space Grotesk', sans-serif;
          color: #F1F5F9;
          font-size: clamp(1.7rem, 3.5vw, 2.6rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          position: relative;
          z-index: 2;
        }

        .pf-cta h2 span {
          background: linear-gradient(135deg, #0FA3A3, #D4A437);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pf-cta-sub {
          color: #64748B;
          font-size: 15px;
          max-width: 500px;
          margin: 0 auto 32px;
          line-height: 1.8;
          position: relative;
          z-index: 2;
        }

        .pf-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 16px;
          text-decoration: none;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #0FA3A3 0%, #0C8C8C 100%);
          color: #fff;
          border: 1px solid rgba(15,163,163,0.3);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          z-index: 2;
        }

        .pf-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(15,163,163,0.25), 0 0 0 1px rgba(15,163,163,0.3);
        }

        .pf-cta-btn svg {
          transition: transform 0.3s ease;
        }

        .pf-cta-btn:hover svg {
          transform: translateX(4px);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1200px) {
          .pf-grid-web, .pf-grid-creative {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .pf-video-info {
            flex-direction: column;
            padding: 24px 24px 28px;
            gap: 20px;
          }

          .pf-video-info-stats {
            width: 100%;
            justify-content: flex-start;
          }

          .pf-video-stat {
            flex: 1;
            min-width: 0;
          }
        }

        @media (max-width: 768px) {
          .pf-grid-web, .pf-grid-creative {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .pf-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .pf-wrap {
            padding: 64px 20px 90px;
          }

          .pf-section-gap {
            margin-top: 60px;
          }

          .pf-video-play-btn {
            width: 72px;
            height: 72px;
          }

          .pf-video-play-btn svg {
            width: 28px;
            height: 28px;
          }
        }

        @media (max-width: 640px) {
          .pf-wrap {
            padding: 56px 16px 80px;
          }

          .pf-stats {
            gap: 10px;
          }

          .pf-stat-item {
            padding: 20px 12px;
          }

          .pf-stat-number {
            font-size: 22px;
          }

          .pf-stat-label {
            font-size: 10px;
          }

          .pf-img {
            height: 220px;
          }

          .pf-content {
            padding: 18px 18px 22px;
          }

          .pf-cta {
            margin-top: 56px;
            padding: 44px 20px;
            border-radius: 24px;
          }

          .pf-cta-btn {
            width: 100%;
            justify-content: center;
            padding: 16px 24px;
          }

          .pf-header h1 {
            font-size: 2rem;
          }

          .pf-header p {
            font-size: 14px;
          }

          .pf-section-head h2 {
            font-size: 1.5rem;
          }

          .pf-cursor-glow {
            display: none;
          }

          .pf-video-card {
            border-radius: 20px;
          }

          .pf-video-info {
            padding: 20px 18px 24px;
          }

          .pf-video-info h3 {
            font-size: 18px;
          }

          .pf-video-info p {
            font-size: 13px;
          }

          .pf-video-info-stats {
            gap: 10px;
          }

          .pf-video-stat {
            padding: 12px 10px;
          }

          .pf-video-stat-num {
            font-size: 15px;
          }

          .pf-video-stat-label {
            font-size: 9px;
          }

          .pf-video-play-btn {
            width: 64px;
            height: 64px;
          }

          .pf-video-play-btn svg {
            width: 24px;
            height: 24px;
          }

          .pf-video-label {
            font-size: 10px;
            padding: 8px 16px;
          }
        }

        @media (max-width: 480px) {
          .pf-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .pf-card {
            border-radius: 20px;
          }

          .pf-video-info-stats {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="pf-bg-grid" />
      <div className="pf-bg-noise" />
      <div className="pf-bg-orb1" />
      <div className="pf-bg-orb2" />
      <div className="pf-bg-orb3" />

      <div
        className="pf-cursor-glow"
        style={{
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
        }}
      />

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="pf-particle"
          style={{
            left: `${8 + i * 9}%`,
            animationDuration: `${18 + i * 4}s`,
            animationDelay: `${i * 2.5}s`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background:
              i % 3 === 0
                ? "rgba(15,163,163,0.35)"
                : i % 3 === 1
                ? "rgba(212,164,55,0.35)"
                : "rgba(168,85,247,0.3)",
          }}
        />
      ))}

      <div className="pf-wrap">
        {/* HEADER */}
        <header className={`pf-header ${headerVisible ? "visible" : ""}`}>
          <div className="pf-badge">
            <Sparkles />
            <span>Our Portfolio</span>
          </div>
          <h1>
            A Showcase of
            <span>Creative Mastery</span>
          </h1>
          <p>
            Explore our curated collection of thoughtfully designed and expertly
            built digital products that help brands grow, connect and dominate
            their industry.
          </p>
          <div className="pf-header-line" />
        </header>

        {/* STATS */}
        <div
          ref={statsRef}
          className={`pf-stats ${statsVisible ? "visible" : ""}`}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="pf-stat-item"
              style={{
                "--stat-color": item.color,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="pf-stat-icon"
                style={{
                  background: `${item.color}14`,
                  color: item.color,
                  border: `1px solid ${item.color}20`,
                }}
              >
                {item.icon}
              </div>
              <span className="pf-stat-number">{item.number}</span>
              <span className="pf-stat-label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* WEBSITE SECTION */}
        <div
          ref={webHeadRef}
          className={`pf-section-head ${webHeadVisible ? "visible" : ""}`}
        >
          <div className="pf-section-icon">
            <Globe />
          </div>
          <h2>
            Live Website <span className="pf-gradient-text">Projects</span>
          </h2>
          <p>
            Fully developed websites built for real businesses with premium UI,
            full responsiveness and conversion-first architecture.
          </p>
          <div className="pf-section-divider" />
        </div>

        <div className="pf-grid-web">
          {websiteItems.map((item, index) => renderCard(item, index, true))}
        </div>

        {/* CREATIVE SECTION */}
        <div className="pf-section-gap">
          <div
            ref={creativeHeadRef}
            className={`pf-section-head ${
              creativeHeadVisible ? "visible" : ""
            }`}
          >
            <div className="pf-section-icon">
              <Palette />
            </div>
            <h2>
              Creative Design <span className="pf-gradient-text">Work</span>
            </h2>
            <p>
              A collection of visual concepts and creative layouts developed for
              branding, campaigns and digital presentation.
            </p>
            <div className="pf-section-divider" />
          </div>

          <div className="pf-grid-creative">
            {creativeItems.map((item, index) =>
              renderCard(item, websiteItems.length + index, false)
            )}
          </div>
        </div>

        {/* SEO VIDEO SECTION */}
        <div className="pf-section-gap">
          <SeoVideoSection />
        </div>

        {/* CTA */}
        <div ref={ctaRef} className={`pf-cta ${ctaVisible ? "visible" : ""}`}>
          <div className="pf-cta-bg-glow" />
          <div className="pf-cta-sparkle">
            <Rocket />
          </div>
          <h2>
            Ready to build something <span>amazing</span>?
          </h2>
          <p className="pf-cta-sub">
            Let's transform your vision into a stunning digital reality. Start
            with a free consultation and see the difference.
          </p>
          <Link to="/contact" className="pf-cta-btn">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;