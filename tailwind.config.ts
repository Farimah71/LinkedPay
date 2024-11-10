import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { Config } from "tailwindcss";

extend([mixPlugin]);

type colorObject = {
  [key: string]: string;
};

function generateDarkenColorFrom(
  input: string,
  percentage: number = 0.07
): string {
  return colord(input).darken(percentage).toHex();
}

function generateForegroundColorFrom(
  input: string,
  percentage: number = 0.08
): string {
  return colord(input)
    .mix(colord(input).isDark() ? "white" : "black")
    .toHex();
}

function generateLightenFromColor(
  input: string,
  percentage: number = 0.6
): string {
  return colord(input).lighten(percentage).toHex();
}

export const tailwindColors: colorObject = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  "actual-white": "#ffffff",
  primary: "#3e859b",
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#3e859b"),
  secondary: "#FF6600",
  "secondary-content": "#FFFFFF",
  "secondary-focus": generateDarkenColorFrom("#FF6600"),
  purple: "#9900EF",
  "purple-focus": generateDarkenColorFrom("#9900EF"),
  accent: "#1FB2A5",
  "accent-content": "#FFFFFF",
  "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  neutral: "#000000",
  "neutral-content": generateForegroundColorFrom("#000000"),
  "neutral-focus": generateDarkenColorFrom("#000000", 0.03),
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#18181C",
  "base-content-3": "#18181C08",
  "base-content-2": "#18181C05",
  "base-content-10":"#18181C1A",
  "base-content-20": "#18181C33",
  "base-content-40": "#18181C66",
  "base-content-60": "#18181C99",
  "base-content-80": "#18181CCC",
  "base-content-medium": generateLightenFromColor("#18181C", 0.4),
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#22B789",
  "success-content": generateForegroundColorFrom("#22B789"),
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  error: "#E62020",
  "error-content": generateForegroundColorFrom("#E62020"),
  "gradient-first": "#34eaa0",
  "gradient-second": "#0fa2e9",
  "main-purple": "#9900EF",
  "base-gray": "#FAFAFA",
  "base-blue":"#3B82F6",
  "orange":"#FF6600",
  "dark-green":"#00636D",
  "blue":"#3B82F6",
  "dark-purple":"#3730A3",
  "light-blue":"#38BDF8",
  "light-purple":"#6366F1"
};

export const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: tailwindColors,
      borderRadius: {
        "2.5xl": "20px",
      },
      fontSize: {
        xs: "12px",
      },
      fontFamily: {
        rubik: "Rubik",
        inter: "Inter",
      },
    },
    container: {
      // center: true,
      // padding: "0",
    },
  },
  plugins: [],
};

export default config;
