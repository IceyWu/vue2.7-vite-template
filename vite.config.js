import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
    Components({
      resolvers: [ElementUiResolver()],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          
        },
      },
    },
  },
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: path.resolve('src') + '/',
      },
    ],
  },
})
