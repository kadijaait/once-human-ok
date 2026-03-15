import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { TRACKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-game-bg/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-game-bg/60 via-transparent to-game-bg/60" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-teal/10 rounded-full blur-3xl animate-contaminate pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 translate-x-1/2 -translate-y-1/2 bg-crimson/8 rounded-full blur-3xl animate-contaminate pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-teal/40" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-teal/40" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-teal/40" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-teal/40" />

      <div
        className="container mx-auto px-6 relative z-10 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-crimson/30 bg-crimson/10">
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
          <span className="font-ui text-xs tracking-[0.3em] uppercase text-crimson">The Contamination Awaits</span>
        </div>

        <h2 className="font-game text-4xl sm:text-5xl md:text-7xl font-black tracking-wide mb-6 leading-tight">
          Enter The<br />
          <span className="text-shimmer">Contaminated World</span>
        </h2>

        <p className="font-ui text-xl text-foreground/65 max-w-xl mx-auto mb-12 leading-relaxed">
          Create your character. Choose your path. The wasteland doesn't wait.
        </p>

        {/* Main CTA */}
        <a
          href={TRACKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 px-10 py-6 bg-crimson text-foreground font-game font-black text-base sm:text-lg tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-crimson-light shadow-[0_0_20px_hsl(338_73%_41%/0.8)] hover:shadow-[0_0_40px_hsl(338_73%_41%/1)] mb-6 animate-pulse-teal"
          style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 100%)", animation: "heartbeat 2.5s ease-in-out infinite" }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-crimson-light/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          <svg className="w-6 h-6 flex-shrink-0 relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.607 0 11.979 0z"/>
          </svg>
          <span className="relative z-10">Play Once Human Free on Windows PC</span>
          {/* Pulsing dot */}
          <span className="relative z-10 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff] animate-heartbeat" />
        </a>

        <div className="block">
          <span className="font-ui text-sm text-foreground/40">
            Free to Play · Windows PC Only
          </span>
        </div>

        {/* Trust signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-12 border-t border-game-border">
          {[
            { icon: "⚡", text: "Instant download via Steam" },
            { icon: "◆", text: "No credit card required" },
            { icon: "◎", text: "1M+ active players" },
          ].map((signal) => (
            <div key={signal.text} className="flex items-center gap-2">
              <span className="text-teal text-base">{signal.icon}</span>
              <span className="font-ui text-sm text-foreground/50">{signal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
