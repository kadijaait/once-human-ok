import { TRACKING_URL } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="relative bg-game-bg border-t border-game-border py-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-game text-lg font-bold text-teal tracking-widest mb-1">ONCE HUMAN</div>
            <div className="font-ui text-xs text-foreground/35 tracking-wide">Online Open-World Survival Game</div>
          </div>

          {/* CTA */}
          <a
            href={TRACKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-teal text-teal font-ui font-semibold text-sm tracking-widest uppercase hover:bg-teal hover:text-game-bg transition-all duration-300"
          >
            Play Free on PC
          </a>

          {/* Legal */}
          <div className="text-center md:text-right">
            <p className="font-ui text-xs text-foreground/25 leading-relaxed max-w-xs">
              Once Human is a trademark of Starry Studio / NetEase Games.<br />
              This page is for promotional purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
