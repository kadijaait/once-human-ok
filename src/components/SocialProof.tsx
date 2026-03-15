import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    text: "This game scratches every survival itch — the world is massive and the creatures are terrifying.",
    author: "SteamUser_Kael",
    rating: 5,
  },
  {
    text: "Best free-to-play survival game I've played. Building and combat feel polished. Playing with friends is a blast.",
    author: "WastelandWalker99",
    rating: 5,
  },
  {
    text: "The contamination mechanic makes every zone feel genuinely dangerous. Love the atmosphere.",
    author: "DarkCrawler_X",
    rating: 5,
  },
];

export default function SocialProof() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 bg-game-bg overflow-hidden">
      {/* Glow bg */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-teal" />
          <span className="font-game text-xs tracking-[0.4em] uppercase text-teal">Community</span>
          <div className="flex-1 h-px bg-game-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <h2 className="font-game text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              Join Over <span className="text-teal text-glow-teal">1 Million</span><br />Survivors
            </h2>
            <p className="font-ui text-lg text-foreground/65 mb-10 leading-relaxed">
              Players around the world are already exploring the contaminated zones, building fortresses, and fighting back the mutations.
            </p>

            {/* Key selling points */}
            <div className="space-y-4 mb-10">
              {[
                { icon: "◆", text: "100% Free to Play — no purchase required", accent: "teal" },
                { icon: "◆", text: "Solo or multiplayer co-op with up to friends", accent: "teal" },
                { icon: "◆", text: "Regular updates and seasonal events", accent: "teal" },
                { icon: "◆", text: "Massive open world with dozens of zones", accent: "teal" },
              ].map((point) => (
                <div key={point.text} className="flex items-start gap-3">
                  <span className="text-teal text-sm mt-1 flex-shrink-0">{point.icon}</span>
                  <span className="font-ui text-base text-foreground/75">{point.text}</span>
                </div>
              ))}
            </div>

            {/* Social stats */}
            <div className="grid grid-cols-3 gap-4 p-6 border border-game-border bg-game-surface">
              {[
                { value: "1M+", label: "Players" },
                { value: "4.6★", label: "Steam Score" },
                { value: "Free", label: "To Play" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-game text-xl sm:text-2xl font-black text-teal mb-1">{stat.value}</div>
                  <div className="font-ui text-xs tracking-widest uppercase text-foreground/45">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - reviews */}
          <div
            className="space-y-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-6 border border-game-border bg-game-surface hover:border-teal/25 transition-all duration-300 group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-teal text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-foreground/75 text-sm leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-sm bg-teal/20 border border-teal/30 flex items-center justify-center">
                    <span className="text-teal text-xs">◆</span>
                  </div>
                  <span className="font-ui text-xs text-foreground/50 tracking-wide">{review.author}</span>
                  <span className="font-ui text-xs text-foreground/30 ml-auto">via Steam</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
