import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' since this is your main GitHub Pages repo
  build: {
    outDir: 'dist'
  }
})
