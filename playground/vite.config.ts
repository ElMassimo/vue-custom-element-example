import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stimulus from 'vite-plugin-stimulus-hmr'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import components from 'unplugin-vue-components/vite'

export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: 'false',
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  build: {
    rollupOptions: {
      input: ['index.html', 'vue.html', 'embed.html'],
    },
    sourcemap: true,
  },
  plugins: [
    stimulus(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tagName) => tagName.includes('-')
        }
      }
    }),
    components({
      dirs: process.cwd(),
      resolvers: [IconsResolver({ componentPrefix: '' })],
    }),
    icons({
      autoInstall: true,
    }),
  ],
})
