
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
        transparent: "rgba(0,0,0,0)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        greyLight: "var(--greyLight)",
        grey: "var(--grey)",
        greyDark: "var(--greyDark)",
        greenDark: "var(--greenDark)",
        green: "var(--green)",
        greenLight: "var(--greeenLight)",
      },
      fontSize: {
        'h1': ['2.75rem', { lineHeight: '1.2' }], // 44px
        'h2': ['2.25rem', { lineHeight: '1.3' }], // 36px
        'h3': ['1.875rem', { lineHeight: '1.4' }], // 30px
        'h4': ['1.5rem', { lineHeight: '1.5' }], // 24px
        'h5': ['1.25rem', { lineHeight: '1.6' }], // 20px
        'h6': ['1rem', { lineHeight: '1.75' }],  // 16px
        'body': ['0.875rem', { lineHeight: '1.6' }],  // Paragraph size
        'small': ['0.7rem', {lineHeight: '1'}]
      },

      animation: {
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
      },

      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(-100%)', opacity: 0},
          '100%': { transform: 'translateX(0%)', opacity: 1}
        },
        slideInLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 0},
          '100%': { transform: 'translateX(0%)', opacity: 1}
        },
      },
    },
  },

  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};