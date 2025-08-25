import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://niccolovaccina.it', //http://localhost:3000
        changeOrigin: true,
        secure: false
      }
    }
  }
})