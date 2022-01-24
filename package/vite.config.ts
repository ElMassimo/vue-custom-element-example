import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import components from 'unplugin-vue-components/vite'
import dts from 'vite-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue', '@vueuse/core'],
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [
    dts(),
    components({
      resolvers: [IconsResolver({ componentPrefix: '' })],
    }),
    icons({
      autoInstall: true,
    }),
    vue({
      reactivityTransform: true,
    }),
  ]
})
