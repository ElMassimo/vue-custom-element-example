import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import icons, { ViteIconsResolver } from 'vite-plugin-icons'
import components from 'vite-plugin-components'
import typescript from '@rollup/plugin-typescript'

const resolvePath = (file: string) => resolve(__dirname, file)

export default defineConfig({
  build: {
    lib: {
      entry: resolvePath('index.ts'),
      name: 'DarkModeSwitch',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue', '@vueuse/core'],
    },
  },
  plugins: [
    components({
      customComponentResolvers: ViteIconsResolver({ componentPrefix: '' }),
    }),
    icons(),
    vue({
      script: {
        refSugar: true,
      },
    }),
    typescript({
      target: 'es2020',
      rootDir: resolvePath('.'),
      declaration: true,
      declarationDir: resolvePath('dist'),
      exclude: resolvePath('node_modules/**'),
      allowSyntheticDefaultImports: true,
    }),
  ]
})
