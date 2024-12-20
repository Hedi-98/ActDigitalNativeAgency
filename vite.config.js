import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  pages: {
    index: "src/main.js",
    other_page: "src/main.js",
  },
})
