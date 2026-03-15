import { useEffect, useRef, useState } from "react";
import exploreImg from "@/assets/gameplay-explore.jpg";
import fightImg from "@/assets/gameplay-fight.jpg";
import buildImg from "@/assets/gameplay-build.jpg";
import surviveImg from "@/assets/gameplay-survive.jpg";
import featureCoopImg from "@/assets/feature-coop.jpg";
import featureExploreImg from "@/assets/feature-explore.jpg";
import { TRACKING_URL } from "@/lib/constants";

const screenshots = [
  { image: buildImg, caption: "Build Your Sanctuary" },
  { image: fightImg, caption: "Survive Brutal Encounters" },
  { image: surviveImg, caption: "Dominate The Wasteland" },
  { image: exploreImg, caption: "Explore The Unknown" },
  { image: featureCoopImg, caption: "Form Powerful Alliances" },
  { image: featureExploreImg, caption: "Uncover Dark Secrets" },
];

export default function ScreenshotsCarousel() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer for reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-game-bg py-20 md:py-28 overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-6 mb-12">
        <div
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-ui text-xs tracking-[0.4em] uppercase text-teal">// Gameplay</span>
          </div>
          <h2 className="font-game text-3xl sm:text-4xl md:text-6xl font-black tracking-wide">
            Experience The{" "}
            <span className="text-shimmer">Wasteland</span>
          </h2>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
        </div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...screenshots, ...screenshots].map((shot, i) => {
            return (
              <div
                key={`${shot.caption}-${i}`}
                className="screenshot-card relative flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-96 cursor-pointer overflow-hidden group border-r border-game-bg"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${(i % screenshots.length) * 0.08}s, transform 0.6s ease ${(i % screenshots.length) * 0.08}s`,
                }}
              >
                {/* Image */}
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={shot.image}
                    alt={shot.caption}
                    className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-game-bg/90 via-game-bg/10 to-transparent" />

                {/* Hover styling */}
                <div className="absolute inset-0 border border-transparent group-hover:border-crimson/50 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-crimson transition-colors duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-game text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-foreground/60 group-hover:text-crimson transition-colors duration-300">
                    {shot.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <a
          href={TRACKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-crimson text-foreground font-game font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-crimson-light shadow-[0_4px_30px_hsl(338_73%_41%/0.4)] hover:shadow-[0_0_40px_hsl(338_73%_41%/0.7)]"
          style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 100%)" }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-crimson-light/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          <span className="relative z-10">Join The Fight</span>
          <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
