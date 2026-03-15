import { useEffect, useRef, useState } from "react";
import exploreImg from "@/assets/gameplay-explore.jpg";
import fightImg from "@/assets/gameplay-fight.jpg";
import buildImg from "@/assets/gameplay-build.jpg";
import surviveImg from "@/assets/gameplay-survive.jpg";

const blocks = [
  {
    label: "Explore",
    number: "01",
    caption: "Traverse a massive contaminated open world full of secrets and danger.",
    image: exploreImg,
    accent: "teal",
  },
  {
    label: "Fight",
    number: "02",
    caption: "Battle terrifying mutated creatures in visceral, high-stakes combat.",
    image: fightImg,
    accent: "crimson",
  },
  {
    label: "Build",
    number: "03",
    caption: "Construct and fortify your base against waves of supernatural threats.",
    image: buildImg,
    accent: "teal",
  },
  {
    label: "Survive",
    number: "04",
    caption: "Craft weapons and gear. Every resource could save your life.",
    image: surviveImg,
    accent: "crimson",
  },
];

export default function GameplayPreview() {
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
    <section ref={ref} className="relative bg-game-bg py-20 md:py-28">
      {/* Section label */}
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-teal" />
          <span className="font-game text-xs tracking-[0.4em] uppercase text-teal">Gameplay Loop</span>
          <div className="flex-1 h-px bg-game-border" />
        </div>

        <h2 className="font-game text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-wide">
          Your Survival Journey
        </h2>
        <p className="font-ui text-lg text-foreground/60 mb-14 max-w-lg">
          Four pillars. One unforgiving world.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocks.map((block, i) => (
            <div
              key={block.label}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  src={block.image}
                  alt={block.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-game-bg via-game-bg/60 to-transparent" />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  block.accent === "teal" ? "bg-teal" : "bg-crimson"
                }`}
              />

              {/* Number */}
              <div className="absolute top-4 right-4">
                <span
                  className={`font-game text-4xl font-black opacity-20 group-hover:opacity-60 transition-opacity duration-300 ${
                    block.accent === "teal" ? "text-teal" : "text-crimson"
                  }`}
                >
                  {block.number}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className={`font-game text-2xl font-bold mb-2 tracking-wide ${
                    block.accent === "teal" ? "text-teal" : "text-crimson"
                  }`}
                >
                  {block.label}
                </div>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {block.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
