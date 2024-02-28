/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    theme: {
      screens: {
        xs: '260px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1536px',
        '3xl': '1920px',
      }
    }
  },
  plugins: [],
}