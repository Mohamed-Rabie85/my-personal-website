// tailwind.config.js
/* --- START OF FILE tailwind.config.js --- */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // أضف أي مسارات أخرى لمجلدات تحتوي على ملفات JSX/TSX/HTML تستخدم Tailwind
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
        background: "var(--background)", // الخلفية للوضع الفاتح
        foreground: "var(--foreground)", // النص للوضع الفاتح
      },
      // هنا تكمن الإضافة الحاسمة لتعريف الـ keyframes والـ animation
      keyframes: {
        "marquee-rtl": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "marquee-rtl": "marquee-rtl 60s linear infinite", // المدة 60 ثانية، يمكن تعديلها
      },
    },
  },
  plugins: [],
};
/* --- END OF FILE tailwind.config.js --- */
