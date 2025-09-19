/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: { DEFAULT: "#FFFFFF", subtle: "#F5F7FA" },
        text: { DEFAULT: "#0B1220" },
        accent: { DEFAULT: "#1E40AF", forest: "#166534" },
        border: "#E5E7EB",
        muted: "#6B7280"
      },
      boxShadow: { subtle: "0 1px 2px 0 rgb(0 0 0 / 0.04)" },
      maxWidth: { content: "72ch" }
    }
  },
  plugins: []
}
