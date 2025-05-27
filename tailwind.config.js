/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nexora: ["Rajdhani", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        teal: {
          50: '#E0F2F1',
          100: '#B2DFDB',
          300: '#4DB6AC',
          500: '#009688',
          700: '#00796B',
        },
        emerald: {
          300: '#6EE7B7',
          500: '#10B981',
        },
        slate: {
          800: '#1E293B',
          900: '#0F172A',
        },
      },
  borderWidth: {
    '2': '2px' // If not already defined by default
  },
  borderRadius: {
    '7xl': '3rem' // Or your desired value
  },
  spacing: {
    'g7': '1.75rem' // Or your desired gap value (28px)
  },
  fontSize: {
    'p4': '1.25rem',   // Or your desired value (20px)
    'h5': '1.125rem',  // Hypothetical h5 size
    'body-1': '1rem',  // Hypothetical body-1
    'body-3': '0.875rem' // Hypothetical body-3
  },
  width: {
    '320': '20rem', // If not already defined by default
    '400': '25rem'  // If not already defined by default
  },
  height: {
    '320': '20rem'   // If not already defined by default
  },
  boxShadow: {
    '500': '0 0 20px rgba(0, 0, 0, 0.25)' // Or your desired shadow
  },
  // Example for s2, s3 (assuming they are colors):
  colors: {
    's2': '#your-s2-color', // Replace with your actual color for s2
    's3': '#your-s3-color', // Replace with your actual color for s3
  },
  // Example for size-* (if you need specific sizes)
  // If they map to width/height, define those:
  width: {
    '20': '5rem',     // 80px
    '28': '7rem'      // 112px
  },
  height: {
    '20': '5rem',
    '28': '7rem'
  },
},
},
  plugins: [],
};
