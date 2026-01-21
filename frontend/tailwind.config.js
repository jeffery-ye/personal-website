/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // thank you AI; my colorblind eyes could never
        space: {
          950: '#000000', // Deepest black-blue (Main background)
          900: '#0B0F19', // Slightly lighter (Card backgrounds)
          800: '#151B2E', // Borders/Separators
        },

        star: {
          100: '#F1F5F9', // Primary Text (Bright white-blue)
          400: '#b1c3dd', // Secondary Text (Muted gray-blue)
        },

        nebula: {
          cyan: '#00ddff',    // Primary Action (Buttons, Links)
          purple: '#ba75fa',  // Secondary/Glow effects
          pink: '#EC4899',    // Highlights
        }
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom right, #030712, #111827)',
      }
    },
  },
  plugins: [],
}