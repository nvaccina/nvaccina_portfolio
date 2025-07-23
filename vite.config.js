import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prerender from 'vite-plugin-prerender'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    prerender({
      routes: ['/', '/portfolio', '/chi-sono', '/competenze', '/contatti']
    })
  ],
})
