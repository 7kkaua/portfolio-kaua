/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-black": "#0A0A0A", 
        "navy-blue": {
          DEFAULT: "#001B3D",
          light: "#002B5B",
          dark: "#000F26",
        },
        "accent-blue": "#004AAD",
      },
      fontFamily: {
        // Fonte para o corpo do texto
        sans: ['Inter', 'sans-serif'],
        // NOVA FONTE PARA O LOGOTIPO
        logo: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}