import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import icons, { ViteIconsResolver } from 'vite-plugin-icons'
import components from 'vite-plugin-components'
import dts from 'vite-dts'

const resolvePath = (file: string) => resolve(__dirname, file)

export default defineConfig({
  build: {
    lib: {
      entry: resolvePath('src/index.ts'),
      name: 'DarkModeSwitch',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue', '@vueuse/core'],
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [
    components({
      customComponentResolvers: ViteIconsResolver({ componentPrefix: '' }),
    }),
    dts(),
    icons(),
    vue({
      script: {
        refSugar: true,
      },
    }),
  ]
})
