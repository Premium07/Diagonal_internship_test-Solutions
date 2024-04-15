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
        // primary: "#a0047d",
      },
      screens: {
        mobile: { min: "320px", max: "480px" }, // Mobile screens (up to 639px)
        tablet: { min: "640px", max: "1023px" }, // Tablet screens (640px to 1023px)
        laptop: { min: "1024px", max: "1279px" }, // Laptop screens (1024px to 1279px)
        desktop: { min: "1280px" }, // Desktop screens (1280px and above)n define as many custom breakpoints as you need
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
