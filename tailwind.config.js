/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
	],
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
        syncopate: ['Syncopate', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        "dark-900": "#050505",
        "dark-800": "#0F0F0F",
        "dark-700": "#1A1A1A",
        "dark-600": "#252525",
        "dark-400": "#3F3F3F",
        "purple": {
          100: "#EDE5FB",
          200: "#D6C5F6",
          300: "#BA9CEF",
          400: "#A17AEA",
          500: "#7B3FE4",
          600: "#6332B7",
          700: "#4A258A",
          800: "#32195C",
          900: "#190C2E",
        },
        // YC-inspired color palette
        "yc": {
          // Orange shades
          orange: {
            50: "#FFF7F0",
            100: "#FFEEDA",
            200: "#FFD6B5",
            300: "#FFBD8F",
            400: "#FFA46A",
            500: "#FF6600", // Main YC orange
            600: "#E65C00",
            700: "#CC5100",
            800: "#A34100",
            900: "#7A3100",
          },
          // Neutral colors (replacing dark)
          neutral: {
            50: "#FAFAF5", // Light background
            100: "#F5F5F0",
            200: "#EAEAE5",
            300: "#DEDEDA",
            400: "#CCCCC7",
            500: "#AAAAA5",
            600: "#888883",
            700: "#666662",
            800: "#444442",
            900: "#222221", // Darkest (for text)
          },
          // Accent blue (complementary to orange)
          blue: {
            50: "#F2F7FC",
            100: "#E3EEF9",
            200: "#C2DEF1",
            300: "#9BC8E8",
            400: "#6DADE0",
            500: "#3B88D2",
            600: "#2D6CB7",
            700: "#255095",
            800: "#1C3A78",
            900: "#152A5A",
          },
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

