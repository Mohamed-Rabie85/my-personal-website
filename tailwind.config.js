// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        // أضف أي مسارات أخرى لمجلدات تحتوي على ملفات JSX/TSX/HTML تستخدم Tailwind
    ],
    theme: {
        extend: {
            colors: {
            'primary-dark': 'var(--primary-dark)',
            'primary-medium': 'var(--primary-medium)',
            'primary-light': 'var(--primary-light)',
            'secondary-dark': 'var(--secondary-dark)',
            'secondary-medium': 'var(--secondary-medium)',
            'secondary-light': 'var(--secondary-light)',
            'neutral-dark': 'var(--neutral-dark)',
            'neutral-medium': 'var(--neutral-medium)',
            'neutral-light': 'var(--neutral-light)',
            'background': 'var(--background)',          // الخلفية للوضع الفاتح
            'foreground': 'var(--foreground)',          // النص للوضع الفاتح
            },
        // يمكن هنا إضافة أي إعدادات خطوط، تباعد، أحجام، إلخ.
        },
    },
    plugins: [],
    };