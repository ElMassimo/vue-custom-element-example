import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: 'false',
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  build: {
    rollupOptions: {
      input: ['index.html', 'vue.html', 'embed.html'],
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tagName) => tagName.includes('-')
        }
      }
    })
  ],
})
