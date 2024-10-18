import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "0.75rem" }], // 10px
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      "1.5xl": ["1.375rem", { lineHeight: "1.875rem" }], // 22px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
      "2.5xl": ["1.75rem", { lineHeight: "2.25rem" }], // 28px
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
      "3.5xl": ["2rem", { lineHeight: "2.5rem" }], // 32px
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      "4.5xl": ["2.5rem", { lineHeight: "2.75rem" }], // 40px
      "5xl": ["2.75rem", { lineHeight: "3.625rem" }], // 44px
      "5.5xl": ["3rem", { lineHeight: "1.17" }], // 48px
      "6xl": ["3.5rem", { lineHeight: "1.14" }], // 56px
      "7xl": ["4.5rem", { lineHeight: "1.11" }], // 72px
      "8xl": ["6rem", { lineHeight: "1" }], // 96px
      "9xl": ["8rem", { lineHeight: "1" }], // 128px
    },
    extend: {
      colors: {
        brand: {
          neutral: {
            50: "#d8d8d8",
            100: "#bcccdc", // borders
            200: "#c9d3ee", // code text
            300: "#a2a9be", // body text on dark background
            500: "#717da3", // body text on light background
            600: "#313742",
            700: "#000c13",
            800: "#030418", // dark text on light background
            900: "#0b0c10", // dark background
          },
          blue: {
            500: "#4f79fd",
            800: "#22242b",
            900: "#13151d",
          },
        },
        denim: {
          50: "#f5f9fa",
          100: "#ddf1fb",
          200: "#b5dff7",
          300: "#84bfeb",
          400: "#519adc",
          500: "#0071ce",
          600: "#335cb7",
          700: "#294594",
          800: "#1d2f6a",
          900: "#111c44",
        },
        royalblue: {
          50: "#f7fafb",
          100: "#e4f0fd",
          200: "#c6d9fb",
          300: "#9eb5f3",
          400: "#7b8deb",
          500: "#6468e4",
          600: "#524cd7",
          700: "#3f39b7",
          800: "#2b2789",
          900: "#181856",
        },
        orchid: {
          50: "#f9fafb",
          100: "#edf0fc",
          200: "#dad5f8",
          300: "#baafef",
          400: "#a385e3",
          500: "#8a60d9",
          600: "#7244c7",
          700: "#5533a4",
          800: "#3b2376",
          900: "#211646",
        },
        cerise: {
          50: "#fdfcfb",
          100: "#fbf0f2",
          200: "#f7cce5",
          300: "#ed9fc9",
          400: "#ea6fa8",
          500: "#de4b8c",
          600: "#c8326b",
          700: "#a1264e",
          800: "#751a32",
          900: "#47111a",
        },
        maroon: {
          50: "#fdfcfb",
          100: "#fbf0ed",
          200: "#f7cfda",
          300: "#eda2b5",
          400: "#ea728c",
          500: "#dd4e6a",
          600: "#c6344b",
          700: "#9e2737",
          800: "#721b24",
          900: "#451114",
        },
        sunset: {
          50: "#fcfbf9",
          100: "#fbf0df",
          200: "#f6d5bc",
          300: "#e9ab8b",
          400: "#df7c5c",
          500: "#cc5a3a",
          600: "#b03f26",
          700: "#892f1e",
          800: "#5f2116",
          900: "#3b140d",
        },
        chocolate: {
          50: "#fbfaf6",
          100: "#f9f0c9",
          200: "#f2db94",
          300: "#dfb660",
          400: "#c58a36",
          500: "#a96a1d",
          600: "#8a5012",
          700: "#693b10",
          800: "#48290d",
          900: "#2e1909",
        },
        olive: {
          50: "#fbfaf4",
          100: "#f8f0c3",
          200: "#eede89",
          300: "#d5bb55",
          400: "#b0912e",
          500: "#8f7217",
          600: "#73590f",
          700: "#58420e",
          800: "#3b2d0c",
          900: "#271c09",
        },
        seagreen: {
          50: "#f4f7f4",
          100: "#e2f0e9",
          200: "#bce5cd",
          300: "#84c99e",
          400: "#40a86d",
          500: "#2c8b46",
          600: "#257432",
          700: "#215829",
          800: "#183c20",
          900: "#102518",
        },
        teal: {
          50: "#f1f7f7",
          100: "#d5f0f6",
          200: "#a4e4ec",
          300: "#6cc8d2",
          400: "#31a8b1",
          500: "#238a8f",
          600: "#1f7274",
          700: "#1b565a",
          800: "#143b42",
          900: "#0d242e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),
  ],
};
export default config;
