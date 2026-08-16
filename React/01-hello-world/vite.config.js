import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Fullstack/React/01-hello-world/',
  plugins: [react()],
})
