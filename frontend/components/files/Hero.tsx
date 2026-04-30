"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (el) {
      el.style.width = "0%";
      setTimeout(() => {
        el.style.transition = "width 1.2s cubic-bezier(0.4,0,0.2,1)";
        el.style.width = "100%";
      }, 300);
    }
  }, []);

  return (
    <section className="min-h-screen bg-cream flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-saffron" />
            <span className="text-xs text-saffron font-body font-semibold tracking-[0.2em] uppercase">
              India's Work Bridge
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl text-navy leading-[1.05] tracking-tight mb-6">
            Every skill
            <br />
            finds its{" "}
            <span className="relative inline-block">
              place.
              <span className="absolute -bottom-1 left-0 h-[3px] bg-saffron w-full" />
            </span>
          </h1>

          <p className="font-body text-slate text-lg leading-relaxed mb-10 max-w-md">
            RozGaarSetu connects skilled workers with the right employers — 
            simply, quickly, and with dignity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-body font-medium px-8 py-4 rounded-sm hover:bg-saffron transition-colors duration-300 group"
            >
              Find Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border border-navy text-navy font-body font-medium px-8 py-4 rounded-sm hover:border-saffron hover:text-saffron transition-colors duration-300"
            >
              Hire Talent
            </a>
          </div>

          {/* Expanding line */}
          <div className="mt-14">
            <div ref={lineRef} className="h-px bg-navy/10" style={{ width: "0%" }} />
            <div className="flex items-center gap-8 mt-4 text-sm text-slate/70 font-body">
              <span>₹0 registration</span>
              <span className="w-px h-4 bg-slate/30" />
              <span>Verified employers</span>
              <span className="w-px h-4 bg-slate/30" />
              <span>Local jobs</span>
            </div>
          </div>
        </div>

        {/* Right — Abstract visual */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Background circle */}
            <div className="absolute inset-0 rounded-full bg-navy/5 animate-pulse-slow" />
            
            {/* Center bridge icon */}
            <div className="absolute inset-8 rounded-full bg-navy flex items-center justify-center">
              <svg className="w-20 h-20 text-saffron" viewBox="0 0 80 80" fill="none">
                {/* Bridge shape */}
                <path d="M8 52 Q40 20 72 52" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <line x1="8" y1="52" x2="8" y2="62" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <line x1="72" y1="52" x2="72" y2="62" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <line x1="8" y1="62" x2="72" y2="62" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <line x1="24" y1="62" x2="24" y2="44" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <line x1="40" y1="62" x2="40" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <line x1="56" y1="62" x2="56" y2="44" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </div>

            {/* Floating cards */}
            <FloatingCard top="0" left="-16" delay="0" label="Plumber" sub="Mumbai" />
            <FloatingCard top="40%" right="-20" delay="0.3" label="Driver" sub="Delhi" />
            <FloatingCard bottom="0" left="10%" delay="0.6" label="Cook" sub="Pune" />
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="flex justify-center pb-8 animate-bounce">
        <svg className="w-5 h-5 text-slate/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

function FloatingCard({
  top, left, right, bottom, delay, label, sub
}: {
  top?: string; left?: string; right?: string; bottom?: string; delay: string; label: string; sub: string;
}) {
  const style: React.CSSProperties = {
    top, left: left ? `-${left}px` : undefined,
    right: right ? `-${right}px` : undefined,
    bottom,
    animationDelay: delay + "s",
    position: "absolute",
  };

  return (
    <div
      style={style}
      className="bg-white rounded-sm shadow-md px-3 py-2 animate-float"
    >
      <p className="text-xs font-body font-semibold text-navy">{label}</p>
      <p className="text-[10px] font-body text-slate">{sub}</p>
    </div>
  );
}
