import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        game: ['Orbitron', 'sans-serif'],
        ui: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Game-specific palette
        teal: {
          DEFAULT: "hsl(183 44% 56%)",
          dark: "hsl(183 44% 35%)",
          light: "hsl(183 44% 75%)",
          glow: "hsl(183 60% 45%)",
        },
        crimson: {
          DEFAULT: "hsl(338 73% 41%)",
          dark: "hsl(338 73% 25%)",
          light: "hsl(338 73% 60%)",
        },
        game: {
          bg: "hsl(0 0% 3%)",
          surface: "hsl(0 0% 8%)",
          surface2: "hsl(0 0% 11%)",
          surface3: "hsl(0 0% 14%)",
          border: "hsl(0 0% 18%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, hsl(183 44% 56%), hsl(183 60% 35%))",
        "gradient-crimson": "linear-gradient(135deg, hsl(338 73% 41%), hsl(338 73% 25%))",
        "gradient-dark": "linear-gradient(180deg, hsl(0 0% 5%) 0%, hsl(0 0% 3%) 100%)",
        "gradient-hero-overlay": "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.9) 80%, rgba(7,7,7,1) 100%)",
        "gradient-card": "linear-gradient(135deg, hsl(0 0% 10%) 0%, hsl(0 0% 7%) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-teal": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(183 44% 56% / 0.3)" },
          "50%": { boxShadow: "0 0 30px hsl(183 44% 56% / 0.7), 0 0 60px hsl(183 44% 56% / 0.3)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "contaminate": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.02)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "heartbeat": {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.03)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.03)" },
          "70%": { transform: "scale(1)" },
        },
        "scroll-wheel": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-teal": "pulse-teal 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "contaminate": "contaminate 6s ease-in-out infinite",
        "heartbeat": "heartbeat 2.5s ease-in-out infinite",
        "scroll-wheel": "scroll-wheel 2s ease-out infinite",
        "marquee": "marquee 35s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
