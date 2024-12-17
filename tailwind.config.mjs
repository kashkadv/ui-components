/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "var(--green)",
      },
      fontSize: {
        'h1': ['2.75rem', { lineHeight: '1.2' }], // 44px
        'h2': ['2.25rem', { lineHeight: '1.3' }], // 36px
        'h3': ['1.875rem', { lineHeight: '1.4' }], // 30px
        'h4': ['1.5rem', { lineHeight: '1.5' }], // 24px
        'h5': ['1.25rem', { lineHeight: '1.6' }], // 20px
        'h6': ['1rem', { lineHeight: '1.75' }],  // 16px
        'body': ['1rem', { lineHeight: '1.6' }]  // Paragraph size
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};