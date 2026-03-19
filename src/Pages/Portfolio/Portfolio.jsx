import React, { useEffect, useState, useRef } from "react";
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
} from "lucide-react";

import homeServicesImg from "../img/homeservices.png";
import realEstateImg from "../img/real.png";
import lawFirmImg from "../img/law.png";

const workItems = [
  {
    title: "Home Services Website",
    type: "Service Business",
    image: homeServicesImg,
    link: "https://australia-project-fe.vercel.app/",
    text: "Clean and modern service website for home experts with seamless user experience.",
    tech: ["React", "Tailwind", "Vercel"],
    color: "#0FA3A3",
  },
  {
    title: "Real Estate Website",
    type: "Property Showcase",
    image: realEstateImg,
    link: "https://real-estate-flax-pi.vercel.app/",
    text: "Premium real estate design with strong visual presentation and property listings.",
    tech: ["React", "CSS3", "Node.js"],
    color: "#D4A437",
  },
  {
    title: "Law Firm Website",
    type: "Legal Business",
    image: lawFirmImg,
    link: "https://law-firm-gamma-five.vercel.app/",
    text: "Elegant dark-themed website for a professional law firm with modern aesthetics.",
    tech: ["React", "Styled", "Deploy"],
    color: "#A855F7",
  },
];

const stats = [
  { number: "50+", label: "Projects Done", icon: <Briefcase size={20} /> },
  { number: "35+", label: "Happy Clients", icon: <Star size={20} /> },
  { number: "99%", label: "Satisfaction", icon: <Zap size={20} /> },
  { number: "24/7", label: "Support", icon: <Monitor size={20} /> },
];

const PortfolioPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const cardRefs = useRef([]);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeaderVisible(true), 200);
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
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200);
            }
            if (entry.target === statsRef.current) {
              setStatsVisible(true);
            }
            if (entry.target === ctaRef.current) {
              setCtaVisible(true);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    if (statsRef.current) observer.observe(statsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .pf-root {
          background: #030712;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          color: #94A3B8;
          overflow-x: hidden;
          position: relative;
          padding: 0;
        }

        /* ===== ANIMATED BACKGROUND ===== */
        .pf-bg-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(rgba(15,163,163,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,163,163,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .pf-bg-orb1 {
          position: fixed;
          top: 10%;
          left: 5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(15,163,163,0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: pf-float1 20s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .pf-bg-orb2 {
          position: fixed;
          bottom: 10%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: pf-float2 25s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .pf-bg-orb3 {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(212,164,55,0.04) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          animation: pf-float3 30s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes pf-float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 50px) scale(0.95); }
        }

        @keyframes pf-float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 30px) scale(1.05); }
          66% { transform: translate(40px, -60px) scale(0.9); }
        }

        @keyframes pf-float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        /* ===== CURSOR GLOW ===== */
        .pf-cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(15,163,163,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          transition: transform 0.3s ease;
          filter: blur(30px);
        }

        /* ===== MAIN WRAPPER ===== */
        .pf-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px 100px;
          position: relative;
          z-index: 2;
        }

        /* ===== HEADER ===== */
        .pf-header {
          text-align: center;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(15,163,163,0.12) 0%, rgba(168,85,247,0.08) 100%);
          border: 1px solid rgba(15,163,163,0.2);
          color: #0FA3A3;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: pf-badge-glow 3s ease-in-out infinite;
        }

        @keyframes pf-badge-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(15,163,163,0.1); }
          50% { box-shadow: 0 0 40px rgba(15,163,163,0.2); }
        }

        .pf-badge svg {
          width: 14px;
          height: 14px;
          animation: pf-sparkle 2s ease-in-out infinite;
        }

        @keyframes pf-sparkle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
        }

        .pf-header h1 {
          margin: 0 0 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #FFFFFF 0%, #94A3B8 40%, #0FA3A3 70%, #D4A437 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pf-gradient-shift 6s ease-in-out infinite;
        }

        @keyframes pf-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .pf-header p {
          max-width: 600px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.7;
          color: #64748B;
        }

        .pf-header p span {
          color: #0FA3A3;
          font-weight: 600;
        }

        /* ===== STATS BAR ===== */
        .pf-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 60px;
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
          padding: 24px 16px;
          border-radius: 20px;
          background: rgba(15,23,42,0.6);
          border: 1px solid rgba(30,41,59,0.8);
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .pf-stat-item:hover {
          border-color: rgba(15,163,163,0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .pf-stat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(15,163,163,0.1);
          color: #0FA3A3;
          margin-bottom: 12px;
        }

        .pf-stat-number {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }

        .pf-stat-label {
          font-size: 12px;
          color: #64748B;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ===== FILTER TABS (decorative) ===== */
        .pf-filters {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 48px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        .pf-header.visible ~ .pf-filters,
        .pf-filters.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-filter-btn {
          padding: 10px 22px;
          border-radius: 12px;
          border: 1px solid rgba(30,41,59,0.8);
          background: rgba(15,23,42,0.4);
          color: #64748B;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .pf-filter-btn:hover {
          border-color: rgba(15,163,163,0.3);
          color: #94A3B8;
        }

        .pf-filter-btn.active {
          background: linear-gradient(135deg, rgba(15,163,163,0.15) 0%, rgba(15,163,163,0.05) 100%);
          border-color: rgba(15,163,163,0.4);
          color: #0FA3A3;
          box-shadow: 0 0 20px rgba(15,163,163,0.1);
        }

        /* ===== PORTFOLIO GRID ===== */
        .pf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .pf-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .pf-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ===== PORTFOLIO CARD ===== */
        .pf-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(15,23,42,0.5);
          border: 1px solid rgba(30,41,59,0.6);
          backdrop-filter: blur(20px);
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .pf-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--card-color, #0FA3A3), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 5;
        }

        .pf-card:hover::before {
          opacity: 1;
        }

        .pf-card:hover {
          border-color: rgba(15,163,163,0.25);
          transform: translateY(-8px) scale(1);
          box-shadow:
            0 25px 60px rgba(0,0,0,0.4),
            0 0 80px rgba(15,163,163,0.06);
        }

        .pf-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }

        .pf-card:hover .pf-card-glow {
          opacity: 1;
        }

        /* ===== IMAGE SECTION ===== */
        .pf-img-wrap {
          position: relative;
          overflow: hidden;
          display: block;
          text-decoration: none;
        }

        .pf-img-wrap::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }

        .pf-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
          filter: saturate(0.9) brightness(0.9);
        }

        .pf-card:hover .pf-img {
          transform: scale(1.08);
          filter: saturate(1.1) brightness(1);
        }

        .pf-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(3,7,18,0.6);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 3;
          backdrop-filter: blur(4px);
        }

        .pf-card:hover .pf-img-overlay {
          opacity: 1;
        }

        .pf-preview-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 14px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          transform: translateY(10px);
          transition: all 0.3s ease 0.1s;
        }

        .pf-card:hover .pf-preview-btn {
          transform: translateY(0);
        }

        .pf-preview-btn svg {
          width: 16px;
          height: 16px;
        }

        /* ===== NUMBER BADGE ===== */
        .pf-number {
          position: absolute;
          top: 16px;
          left: 16px;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(3,7,18,0.7);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          z-index: 4;
        }

        /* ===== CARD CONTENT ===== */
        .pf-content {
          position: relative;
          padding: 20px 24px 28px;
          z-index: 2;
        }

        .pf-type-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .pf-type {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .pf-type-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: pf-pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pf-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .pf-content h3 {
          margin: 0 0 10px;
          font-family: 'Space Grotesk', sans-serif;
          color: #F1F5F9;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .pf-card:hover .pf-content h3 {
          color: #fff;
        }

        .pf-content p {
          margin: 0 0 18px;
          color: #64748B;
          font-size: 14px;
          line-height: 1.75;
          transition: color 0.3s ease;
        }

        .pf-card:hover .pf-content p {
          color: #94A3B8;
        }

        /* ===== TECH TAGS ===== */
        .pf-tech-row {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .pf-tech-tag {
          padding: 5px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          background: rgba(30,41,59,0.6);
          border: 1px solid rgba(51,65,85,0.5);
          color: #94A3B8;
          transition: all 0.3s ease;
        }

        .pf-card:hover .pf-tech-tag {
          border-color: rgba(15,163,163,0.2);
          color: #CBD5E1;
        }

        /* ===== VISIT LINK ===== */
        .pf-visit {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .pf-visit::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }

        .pf-visit:hover::before {
          left: 100%;
        }

        .pf-visit:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 25px rgba(15,163,163,0.2);
        }

        .pf-visit svg {
          width: 15px;
          height: 15px;
          transition: transform 0.3s ease;
        }

        .pf-visit:hover svg {
          transform: translate(2px, -2px);
        }

        /* ===== CTA SECTION ===== */
        .pf-cta {
          margin-top: 80px;
          text-align: center;
          padding: 60px 32px;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          background: rgba(15,23,42,0.6);
          border: 1px solid rgba(30,41,59,0.6);
          backdrop-filter: blur(20px);
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-cta.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pf-cta::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0FA3A3, #D4A437, #A855F7, transparent);
          animation: pf-cta-line 4s linear infinite;
          background-size: 200% 100%;
        }

        @keyframes pf-cta-line {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .pf-cta::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(15,163,163,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .pf-cta-sparkle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(15,163,163,0.15) 0%, rgba(212,164,55,0.1) 100%);
          border: 1px solid rgba(15,163,163,0.2);
          margin-bottom: 24px;
          animation: pf-cta-icon 3s ease-in-out infinite;
        }

        @keyframes pf-cta-icon {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg) scale(1.05); }
          75% { transform: rotate(-5deg) scale(1.05); }
        }

        .pf-cta-sparkle svg {
          color: #0FA3A3;
        }

        .pf-cta h2 {
          margin: 0 0 12px;
          font-family: 'Space Grotesk', sans-serif;
          color: #F1F5F9;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
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

        .pf-cta .pf-cta-sub {
          margin: 0 0 32px;
          color: #64748B;
          font-size: 16px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
          position: relative;
          z-index: 2;
        }

        .pf-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 38px;
          border-radius: 18px;
          text-decoration: none;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 700;
          position: relative;
          z-index: 2;
          overflow: hidden;
          background: linear-gradient(135deg, #0FA3A3 0%, #0C8C8C 100%);
          color: #fff;
          border: 1px solid rgba(15,163,163,0.5);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pf-cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.6s ease;
        }

        .pf-cta-btn:hover::before {
          left: 100%;
        }

        .pf-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow:
            0 20px 50px rgba(15,163,163,0.3),
            0 0 60px rgba(15,163,163,0.1);
        }

        .pf-cta-btn svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .pf-cta-btn:hover svg {
          transform: translateX(4px);
        }

        /* ===== FLOATING PARTICLES ===== */
        .pf-particle {
          position: fixed;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(15,163,163,0.3);
          pointer-events: none;
          z-index: 0;
          animation: pf-particle-float linear infinite;
        }

        @keyframes pf-particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh) rotate(720deg); opacity: 0; }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .pf-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .pf-wrap {
            padding: 60px 18px 80px;
          }

          .pf-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .pf-stat-item {
            padding: 18px 12px;
          }

          .pf-stat-number {
            font-size: 22px;
          }

          .pf-img {
            height: 220px;
          }

          .pf-content {
            padding: 18px 18px 24px;
          }

          .pf-cta {
            margin-top: 50px;
            padding: 40px 20px;
          }

          .pf-cta-btn {
            width: 100%;
            justify-content: center;
          }

          .pf-filters {
            gap: 8px;
          }

          .pf-filter-btn {
            padding: 8px 16px;
            font-size: 12px;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div className="pf-bg-grid" />
      <div className="pf-bg-orb1" />
      <div className="pf-bg-orb2" />
      <div className="pf-bg-orb3" />

      {/* Cursor Glow */}
      <div
        className="pf-cursor-glow"
        style={{
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="pf-particle"
          style={{
            left: `${10 + i * 12}%`,
            animationDuration: `${15 + i * 5}s`,
            animationDelay: `${i * 2}s`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background:
              i % 3 === 0
                ? "rgba(15,163,163,0.3)"
                : i % 3 === 1
                ? "rgba(212,164,55,0.3)"
                : "rgba(168,85,247,0.3)",
          }}
        />
      ))}

      <div className="pf-wrap">
        {/* Header */}
        <header className={`pf-header ${headerVisible ? "visible" : ""}`}>
          <div className="pf-badge">
            <Sparkles />
            Our Portfolio
          </div>
          <h2>Creative Work Showcase</h2>
          <p>
            Handcrafted digital experiences that drive{" "}
            <span>real results</span> for businesses worldwide
          </p>
        </header>
                

        {/* Portfolio Grid */}
        <div className="pf-grid">
          {workItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`pf-card ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
              style={{
                "--card-color": item.color,
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Glow */}
              <div
                className="pf-card-glow"
                style={{
                  background: `radial-gradient(600px circle at ${
                    activeCard === index ? "50% 20%" : "50% 50%"
                  }, ${item.color}08, transparent 60%)`,
                }}
              />

              {/* Number Badge */}
              <div className="pf-number">0{index + 1}</div>

              {/* Image */}
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="pf-img-wrap"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="pf-img"
                />
                <div className="pf-img-overlay">
                  <div className="pf-preview-btn">
                    <Eye /> Live Preview
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="pf-content">
                <div className="pf-type-row">
                  <span
                    className="pf-type"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    <span
                      className="pf-type-dot"
                      style={{ background: item.color }}
                    />
                    {item.type}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                {/* Tech Tags */}
                <div className="pf-tech-row">
                  {item.tech.map((t) => (
                    <span key={t} className="pf-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visit Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-visit"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                  }}
                >
                  Visit Website <ExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`pf-cta ${ctaVisible ? "visible" : ""}`}
        >
          <div className="pf-cta-sparkle">
            <Rocket size={24} />
          </div>
          <h2>
            Ready to build something <span>amazing</span>?
          </h2>
          <p className="pf-cta-sub">
            Let's turn your vision into a stunning digital reality. Get
            started with a free consultation today.
          </p>
          <Link to="/contact" className="pf-cta-btn">
            Start Your Project <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;