import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/panel-builder/',
  test: {
    environment: 'jsdom',
    globals: true, // This allows us to use describe() and it() without importing them every time
  }
})