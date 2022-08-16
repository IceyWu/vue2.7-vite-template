import { defineConfig} from 'vite'

import path from 'path'

import Plg from './presets/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Plg()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
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
