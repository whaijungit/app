import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
  server: {
    proxy: {
        '^/api': {
            changeOrigin: true,
            target: 'http://172.17.3.91:4001/',
        }
    }
  },
  plugins: [react()],
})
