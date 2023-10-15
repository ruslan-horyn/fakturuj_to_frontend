import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/products',
  build: {
    sourcemap: true,
  },
  publicDir: 'public',
  server: {
    open: true,
    host: true,
    port: 5000,
  },
})
