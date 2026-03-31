import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PANELTEST.GITHUB.IO/', // <-- REPLACE THIS WITH YOUR EXACT REPO NAME!
})