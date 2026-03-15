import { useEffect, useRef, useState } from "react";

export default function PlatformSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const specs = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
        </svg>
      ),
      label: "Platform",
      value: "Windows PC",
      sub: "Windows 10/11 64-bit",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.607 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
        </svg>
      ),
      label: "Launcher",
      value: "Steam",
      sub: "Download via Steam",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
          <path d="M8 12h8M12 8l4 4-4 4"/>
        </svg>
      ),
      label: "Price",
      value: "Free to Play",
      sub: "No purchase required",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 bg-game-surface border-y border-game-border overflow-hidden">
      {/* BG accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-game text-xs tracking-[0.4em] uppercase text-teal/80">How to Play</span>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className="group flex flex-col items-center text-center p-8 border border-game-border hover:border-teal/40 bg-game-bg hover:bg-game-surface2 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s, border-color 0.3s ease`,
              }}
            >
              <div className="text-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </div>
              <div className="font-ui text-xs tracking-[0.3em] uppercase text-foreground/40 mb-2">{spec.label}</div>
              <div className="font-game text-xl font-bold text-foreground mb-1">{spec.value}</div>
              <div className="font-ui text-sm text-foreground/50">{spec.sub}</div>
            </div>
          ))}
        </div>

        <p className="text-center font-ui text-sm text-foreground/35 mt-8">
          Once Human is available exclusively on Windows PC via Steam.
        </p>
      </div>
    </section>
  );
}
