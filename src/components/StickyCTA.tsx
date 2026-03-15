import { useEffect, useState } from "react";
import { TRACKING_URL } from "@/lib/constants";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href={TRACKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3 px-6 py-4 bg-crimson text-foreground font-game font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-crimson-light shadow-[0_0_20px_hsl(338_73%_41%/0.8)] hover:shadow-[0_0_40px_hsl(338_73%_41%/1)] animate-pulse-teal"
        style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 0 100%)", animation: "heartbeat 2.5s ease-in-out infinite" }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-crimson-light/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
        <span className="relative z-10">Play Free Now</span>
        {/* Pulsing dot */}
        <span className="relative z-10 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff] animate-heartbeat" />
      </a>
    </div>
  );
}
