import { useEffect, useRef, useState } from "react";
import revealBg from "@/assets/game-reveal-bg.jpg";
import { TRACKING_URL } from "@/lib/constants";

export default function GameReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-heartbeat"
        style={{ backgroundImage: `url(${revealBg})` }}
      />
      <div className="absolute inset-0 bg-game-bg/70 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-game-bg via-transparent to-game-bg" />


      {/* Teal line decorators */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-teal to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-teal to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.1s",
            }}
          >
            <div className="w-12 h-px bg-teal/50" />
            <span className="font-game text-xs tracking-[0.5em] uppercase text-teal/80">The Game</span>
            <div className="w-12 h-px bg-teal/50" />
          </div>

          {/* Title */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <h2 className="font-game text-5xl sm:text-6xl md:text-8xl font-black tracking-widest mb-2">
              ONCE
            </h2>
            <h2 className="font-game text-5xl sm:text-6xl md:text-8xl font-black tracking-widest text-teal text-glow-teal mb-8">
              HUMAN
            </h2>
          </div>

          {/* Divider */}
          <div
            className="flex items-center gap-4 mb-8 justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          >
            <div className="w-16 h-px bg-teal/30" />
            <div className="w-2 h-2 border border-teal/60 rotate-45" />
            <div className="w-16 h-px bg-teal/30" />
          </div>

          {/* Description */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
            }}
          >
            <p className="font-ui text-xl sm:text-2xl text-foreground/80 leading-relaxed mb-4">
              An online open-world survival game set in a dark post-apocalyptic world contaminated by supernatural forces.
            </p>
            <p className="font-ui text-lg text-foreground/55 leading-relaxed mb-10">
              Explore a massive map. Craft weapons. Build and defend your base. Fight mutated creatures — alone or with friends.
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 mb-12 max-w-lg mx-auto"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.65s",
            }}
          >
            {[
              { value: "1M+", label: "Active Players" },
              { value: "FREE", label: "To Play" },
              { value: "MODE", label: "PvE and Hardcore PvP" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-game text-2xl sm:text-3xl font-black text-teal mb-1">{stat.value}</div>
                <div className="font-ui text-xs tracking-[0.2em] uppercase text-foreground/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.8s",
            }}
          >
            <a
              href={TRACKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-crimson text-white font-game font-bold text-sm tracking-widest uppercase overflow-hidden hover:bg-crimson-light transition-all duration-300 glow-crimson hover:shadow-[0_0_50px_hsl(338_73%_41%/0.9)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-crimson-light/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <svg className="w-5 h-5 flex-shrink-0 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
              <span className="relative z-10">Play — Windows Only</span>
              {/* Pulsing dot */}
              <span className="relative z-10 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff] animate-heartbeat" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
