import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart3,
  Target,
  ArrowRight,
} from "lucide-react";

export default function CaseStudies() {
  const results = [
    {
      icon: TrendingUp,
      title: "+180% Organic Traffic Growth",
      desc: "SEO strategy, on-page improvements and technical optimisation increased search visibility and drove significantly stronger organic traffic.",
      iconColor: "text-[#0FA3A3]",
      iconBg: "bg-[#0FA3A3]/10",
      border: "border-[#0FA3A3]/20",
      line: "from-[#0FA3A3] to-cyan-400",
      glow: "bg-[#0FA3A3]/10",
    },
    {
      icon: Target,
      title: "3X Increase in Lead Enquiries",
      desc: "Optimised landing pages, funnel improvements and stronger conversion strategy helped multiply high-quality inbound leads.",
      iconColor: "text-[#D4A437]",
      iconBg: "bg-[#D4A437]/10",
      border: "border-[#D4A437]/20",
      line: "from-[#D4A437] to-amber-400",
      glow: "bg-[#D4A437]/10",
    },
    {
      icon: BarChart3,
      title: "+250% ROI on Ad Campaigns",
      desc: "Smarter targeting, better campaign structure and ongoing optimisation delivered a stronger return on advertising investment.",
      iconColor: "text-[#0F2A44]",
      iconBg: "bg-slate-100",
      border: "border-slate-200",
      line: "from-[#0F2A44] to-slate-500",
      glow: "bg-slate-200/40",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,163,163,0.06),transparent_35%)]" />
      <div className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="absolute right-[10%] bottom-10 h-40 w-40 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#D4A437]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4A437] shadow-sm">
            Case Studies
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0F2A44] md:text-4xl lg:text-5xl">
            Real Results That
            <span className="block bg-gradient-to-r from-[#0FA3A3] via-[#47c7c7] to-[#D4A437] bg-clip-text text-transparent">
              Drive Business Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Our strategies focus on measurable impact — from stronger traffic
            and better lead generation to improved marketing ROI.
          </p>
        </div>

        {/* Result Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[28px] border ${item.border} bg-white/95 p-8 backdrop-blur-sm shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]`}
              >
                {/* top accent line */}
                <div
                  className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r ${item.line} opacity-80`}
                />

                {/* soft glow */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${item.glow} blur-3xl opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100`}
                />

                {/* number */}
                <div className="absolute right-6 top-5 text-5xl font-extrabold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                  0{index + 1}
                </div>

                {/* icon */}
                <div
                  className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconBg} ring-1 ring-black/5 transition-all duration-300 group-hover:scale-105`}
                >
                  <Icon className={`h-7 w-7 ${item.iconColor}`} />
                </div>

                {/* title */}
                <h3 className="relative text-xl font-bold leading-snug text-[#0F2A44] md:text-2xl">
                  {item.title}
                </h3>

                {/* description */}
                <p className="relative mt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                  {item.desc}
                </p>

                {/* bottom line */}
                <div
                  className={`mt-6 h-[4px] w-14 rounded-full bg-gradient-to-r ${item.line} transition-all duration-500 group-hover:w-24`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-2xl border border-[#0F2A44] bg-[#0F2A44] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,42,68,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173554]"
          >
            Get Started 
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}