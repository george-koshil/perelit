/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: "0px 40px 60px 0px rgba(26, 25, 37, 0.25)",
        md: "0px 15px 30px 0px rgba(26, 25, 37, 0.25)",
        sm: "0px 10px 15px 0px rgba(26, 25, 37, 0.25)",
        variant1: "0px 10px 60px 0px rgba(15, 12, 58, 0.25)",
        variant2: "0px 15px 15px 0px rgba(26, 25, 37, 0.25)",
        top: "-3px -7px 14px -7px rgba(15, 12, 58, 0.25)",
      },
      colors: {
        text: "#21222D",
        secondaryText: "#535460",
        primary: "#009CDC",
        secondary: "#40C4FF",
        inputs: "#8E8F9B",
        lines: "#D1D2DF",
        surfaces: "#EFEFF5",
        success: "#38D882",
        error: "#F43658",
        alert: "#FFBF00",
        footer: "#E5E6F0",
        blue1: "#009CDC",
        ultraLightGray: "rgba(255, 255, 255, 0.20)"
      }
    },
  },
  plugins: [],
}
