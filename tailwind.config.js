/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "var(--primary-dark)",
        "primary-medium": "var(--primary-medium)",
        "primary-light": "var(--primary-light)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-medium": "var(--secondary-medium)",
        "secondary-light": "var(--secondary-light)",
        "neutral-dark": "var(--neutral-dark)",
        "neutral-medium": "var(--neutral-medium)",
        "neutral-light": "var(--neutral-light)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "marquee-rtl": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "marquee-rtl": "marquee-rtl 60s linear infinite",
      },
    },
  },
  plugins: ['@tailwindcss/typography' ],
};
