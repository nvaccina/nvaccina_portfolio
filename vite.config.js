import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sitemapPlugin({
      hostname: 'https://niccolo-vaccina.netlify.app',
      urls: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'daily', priority: 0.8 },
        { url: '/competenze', changefreq: 'daily', priority: 0.8 },
        { url: '/portfolio', changefreq: 'daily', priority: 0.9 },
        { url: '/contatti', changefreq: 'daily', priority: 0.7 },
      ],
    })
  ],
})
