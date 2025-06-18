// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme"; // تأكد من أن هذا import صحيح لـ defaultTheme

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cairo)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // الألوان المخصصة لديك
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
      // هنا نضيف تخصيصات typography
      typography: ({ theme }) => ({
        // Default variant (يتم تطبيقه عند استخدام فئة 'prose')
        DEFAULT: {
          css: {
            color: theme("colors.neutral.dark"), // لون النص الأساسي
            lineHeight: "1.8", // تباعد أسطر عام للفقرات (أكثر راحة للقراءة)

            // تخصيص الفقرات <p>
            p: {
              marginTop: "1.5em", // زيادة المسافة قبل الفقرة
              marginBottom: "1.5em", // زيادة المسافة بعد الفقرة
            },

            // تخصيص العناوين
            h1: {
              color: theme("colors.primary.medium"), // لون العنوان الرئيسي
              // fontSize: theme("fontSize.4xl"), // استخدم حجم الخط من ثيم Tailwind
              fontWeight: theme("fontWeight.bold"),
              marginTop: "4em",
              marginBottom: "2em",
            },
            h2: {
              color: theme("colors.primary.medium"), // لون مختلف للعناوين الفرعية
              // fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.bold"),
              marginTop: "1.75em",
              marginBottom: "0.75em",
            },
            h3: {
              color: theme("colors.primary.medium"),
              // fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.semibold"),
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },

            // تخصيص القوائم
            ul: {
              marginTop: "1em",
              marginBottom: "1em",
              paddingLeft: "1.5em", // هوامش لترتيب النقط في القوائم
              "> li": {
                "&::before": {
                  backgroundColor: theme("colors.secondary.medium"), // لون نقطة القائمة
                },
                marginTop: "0.75em",
                marginBottom: "0.75em",
              },
            },
            ol: {
              marginTop: "1em",
              marginBottom: "1em",
              paddingLeft: "1.5em",
              "> li": {
                marginTop: "0.75em",
                marginBottom: "0.75em",
              },
            },

            // تخصيص الروابط داخل المحتوى
            a: {
              color: theme("colors.primary.medium"),
              fontWeight: theme("fontWeight.medium"),
              textDecoration: "underline",
              textUnderlineOffset: "4px", // مسافة بين النص والخط
              "&:hover": {
                color: theme("colors.primary.dark"),
              },
            },

            // تخصيص الاقتباسات
            blockquote: {
              color: theme("colors.neutral.dark"),
              borderLeftColor: theme("colors.secondary.medium"),
              borderLeftWidth: "4px",
              paddingLeft: "1em",
              fontStyle: "italic",
              marginTop: "2em",
              marginBottom: "2em",
            },

            // إذا كنت تستخدم أكواد (مثلاً لغة برمجة)
            code: {
              backgroundColor: theme("colors.neutral.light"),
              color: theme("colors.primary.dark"),
              padding: "0.2em 0.4em",
              borderRadius: "0.2em",
              fontWeight: "normal",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: {
              // كود بلوك
              backgroundColor: theme("colors.neutral.dark"),
              color: theme("colors.foreground"),
              borderRadius: "0.5em",
              padding: "1em",
              overflowX: "auto",
            },
          },
        },
        // يمكنك تعريف أشكال إضافية من prose هنا، مثلاً prose-sm أو prose-dark
        // sm: {
        //   css: {
        //     h1: {
        //       fontSize: theme('fontSize.3xl'),
        //     },
        //   },
        // },
      }),
    },
  },
  plugins: [typography],
};

export default config;
