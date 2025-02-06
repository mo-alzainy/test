import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Vue plugin
    vueDevTools(), // Vue DevTools plugin (ensure you have this installed if you're using it)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Resolves @ to the /src folder
    },
  },
  server: {
    fs: {
      allow: ['..'], // Ensure that Vite allows access to parent directories
    },
  },
})
