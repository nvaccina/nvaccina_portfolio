import { defineConfig } from 'vite'
import { VitePluginPrerender } from 'vite-plugin-prerender'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginPrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: ['/', '/chi-sono', '/contatti', '/portfolio', '/competenze'],
    })
  ],
})
