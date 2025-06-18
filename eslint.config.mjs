// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // إضافة إعدادات القواعد المخصصة هنا
  {
    rules: {
      // تعطيل قاعدة no-explicit-any
      "@typescript-eslint/no-explicit-any": "off",
      // أو لجعلها تحذيراً فقط (لن يوقف البناء ولكنها ستظهر في الـ console):
      // "@typescript-eslint/no-explicit-any": "warn"
    },
  },
];

export default eslintConfig;
