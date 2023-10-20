import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: '/products',
  build: {
    sourcemap: true,
    assetsDir: 'assets',
  },
  publicDir: 'public',
  server: {
    open: true,
    host: true,
    port: 5000,
  },
})
