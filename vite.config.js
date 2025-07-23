import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prerender from 'vite-plugin-prerender'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    prerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: ['/', '/chi-sono', '/portfolio', '/competenze', '/contatti'],
      renderAfterDocumentEvent: 'render-event'
    })
  ]
})
