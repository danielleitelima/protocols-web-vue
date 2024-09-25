import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('app-'),
        },
      },
    }),
  ],
  server: {
    port: 3001,
    watch: {
      usePolling: true,
    }
  }
})
