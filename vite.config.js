import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Use default configuration
  optimizeDeps: {
    include: [
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'gsap'
    ],
    exclude: ['js-big-decimal']
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
  },
  "scripts": {
  "build": "node node_modules/vite/bin/vite.js build"
},
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  }
})