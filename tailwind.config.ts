import type { Config } from "tailwindcss";
import animation from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 10s infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myGray: {
          "200": "#E5E5E5",
          "500": "#5C5C5C",
        },
        myPink: {
          "100": "#E7C0DB",
          "200": "#C698B8",
          "600": "#FF00AE",
        },
        myViolet: {
          "50": "#E2DCE7",
          "100": "#E7C0DB",
          "600": "#6727A6",
          "900": "#3C1661",
        },
        myRed: "#D23F63",
        myGreen: "#67C076",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animation],
} satisfies Config;
