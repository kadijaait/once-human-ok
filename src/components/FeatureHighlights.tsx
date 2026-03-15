import { useEffect, useRef, useState } from "react";
import buildImg from "@/assets/gameplay-build.jpg";
import fightImg from "@/assets/gameplay-fight.jpg";
import coopImg from "@/assets/feature-coop.jpg";

const features = [
  {
    title: "Build Your Fortress",
    description: "Design and construct your base from the ground up. Reinforce walls, set traps, and create a stronghold that can withstand any siege.",
    image: buildImg,
    video: "https://oncehuman.v.easebar.com/2026/0119/20260119.mp4",
    icon: "⬡",
    tag: "Base Building",
    accent: "teal",
  },
  {
    title: "Hunt or Be Hunted",
    description: "Confront colossal mutated creatures born from the contamination. Every encounter is a fight for your life.",
    image: fightImg,
    video: "https://oh.fp.ps.easebar.com/file/67da65c8d0a7b9705e0f426eKK98HNZM03",
    icon: "⚔",
    tag: "Combat",
    accent: "crimson",
  },
  {
    title: "Stronger Together",
    description: "Team up with friends to take on threats too powerful to face alone. Build together, fight together, survive together.",
    image: coopImg,
    video: "https://oh.fp.ps.easebar.com/file/67da65f88dd609613e97246fWxQBsscs03",
    icon: "◈",
    tag: "Co-op Multiplayer",
    accent: "teal",
  },
];

export default function FeatureHighlights() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(features.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-game-bg via-game-surface/30 to-game-bg py-24 md:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, hsl(183 44% 56%) 0%, transparent 50%), radial-gradient(circle at 75% 50%, hsl(338 73% 41%) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-teal" />
          <span className="font-game text-xs tracking-[0.4em] uppercase text-teal">Core Features</span>
          <div className="flex-1 h-px bg-game-border" />
        </div>

        <h2 className="font-game text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          Everything You Need<br /><span className="text-teal">To Survive</span>
        </h2>
        <p className="font-ui text-lg text-foreground/55 mb-16 max-w-md">
          A complete survival experience in one dark, relentless world.
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            return (
              <div
                key={feature.title}
                ref={(el) => { refs.current[i] = el; }}
                className="group flex flex-col overflow-hidden border border-game-border hover:border-teal/30 bg-game-surface transition-all duration-500"
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s, border-color 0.3s ease`,
                }}
              >
                {/* Image / Video */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <video
                    src={feature.video}
                    poster={feature.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-game-surface via-game-surface/20 to-transparent" />

                  {/* Feature tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-ui font-semibold tracking-widest uppercase border backdrop-blur-sm ${
                        feature.accent === "teal"
                          ? "border-teal/50 bg-teal/20 text-teal"
                          : "border-crimson/50 bg-crimson/20 text-crimson"
                      }`}
                    >
                      {feature.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col flex-1 p-8 pt-4">
                  {/* Accent line */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${
                      feature.accent === "teal" ? "bg-teal/50 group-hover:bg-teal" : "bg-crimson/50 group-hover:bg-crimson"
                    } transition-colors duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`text-3xl mb-4 ${feature.accent === "teal" ? "text-teal" : "text-crimson"}`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="font-game text-xl sm:text-2xl font-bold mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="font-body text-foreground/65 leading-relaxed text-sm sm:text-base flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
