import { useRef, useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { TRACKING_URL } from "@/lib/constants";
import { Volume2, VolumeX } from "lucide-react";

const VIDEO_URL = "https://oncehuman.v.easebar.com/2026/0119/20260119.mp4";

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt autoplay immediately
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }

    const startAudio = () => {
      if (audioRef.current && !isAudioPlaying) {
        audioRef.current.play().then(() => {
          setIsAudioPlaying(true);
        }).catch(() => {
          console.log("Audio autoplay blocked by browser");
        });
      }
      
      // Remove listeners once interacting
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("keydown", startAudio);
    };

    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("scroll", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
  }, []);

  // Sync audio element with state changes (triggered by toggle button)
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isAudioPlaying) {
      audioRef.current.play().catch(e => console.log("Play failed", e));
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent trigger global startAudio
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback image bg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Official video background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ opacity: videoLoaded ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <video
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-auto min-w-full min-h-full max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
          onLoadedData={() => setVideoLoaded(true)}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-game-bg/60 via-transparent to-game-bg/60" />

      {/* Teal corner accents */}
      <div className="absolute top-0 left-0 w-64 h-px bg-gradient-to-r from-teal to-transparent" />
      <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-teal to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-px bg-gradient-to-l from-teal to-transparent" />
      <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-teal to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-sm border border-teal/30 bg-teal/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-teal" />
          <span className="font-ui text-sm tracking-[0.2em] uppercase text-teal">Online Open-World Survival</span>
        </div>

        {/* Headline */}
        <h1 className="font-game text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-4 tracking-wide">
          A Contaminated World
          <br />
          <span className="text-shimmer">Has Appeared</span>
        </h1>

        {/* Subheadline */}
        <p className="font-ui text-lg sm:text-xl md:text-2xl text-foreground/75 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore a dark open world where survival is never guaranteed.
          <br className="hidden sm:block" />
          Face supernatural threats. Build. Fight. Endure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href={TRACKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-crimson text-foreground font-game font-bold text-base tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-crimson-light glow-crimson hover:shadow-[0_0_40px_hsl(338_73%_41%/0.8)] min-w-[240px] justify-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-crimson-light/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
            Discover The Game
          </a>

          <a
            href="https://www.youtube.com/watch?v=rABSq_3BMRQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-foreground/30 text-foreground font-ui font-semibold text-base tracking-widest uppercase backdrop-blur-sm bg-foreground/5 hover:border-crimson hover:text-crimson transition-all duration-300 min-w-[240px] justify-center"
          >
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center flex-shrink-0 group-hover:bg-crimson/10 transition-colors">
              <svg className="w-3 h-3 ml-0.5" viewBox="0 0 12 14" fill="currentColor">
                <path d="M1 1l10 6-10 6V1z" />
              </svg>
            </span>
            Watch Gameplay
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-teal/40 bg-gradient-to-br from-game-surface2 to-game-bg flex items-center justify-center"
              >
                <span className="text-[10px] text-teal/70">◆</span>
              </div>
            ))}
          </div>
          <span className="font-ui text-sm text-foreground/60">
            <span className="text-teal font-semibold">1M+</span> players exploring this world
          </span>
        </div>
      </div>

      {/* Ambient Audio */}
      <audio
        ref={audioRef}
        src="/ES_Final Brigade - Max Anson.mp3"
        loop
      />

      {/* Audio Toggle Button */}
      <button
        onClick={toggleAudio}
        className="absolute bottom-8 right-6 md:right-12 z-50 p-3 rounded-full bg-game-surface/80 border border-teal/20 text-teal hover:bg-teal/20 hover:scale-110 transition-all backdrop-blur-sm"
        aria-label="Toggle background audio"
      >
        {isAudioPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 pointer-events-none" />}
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="w-7 h-11 border-2 border-foreground/40 rounded-full flex justify-center py-2 relative">
          <div className="w-1.5 h-2.5 bg-teal rounded-full animate-scroll-wheel" />
        </div>
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-foreground/40 mt-1">Scroll</span>
      </div>
    </section>
  );
}
