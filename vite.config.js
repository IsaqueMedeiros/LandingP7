import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/LandingP7/',
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
