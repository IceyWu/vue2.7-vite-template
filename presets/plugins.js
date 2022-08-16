import { resolve } from 'path'
import { env } from './shared/env'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import { viteMockServe } from 'vite-plugin-mock'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import { splitVendorChunkPlugin } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'

export default () => {
  return [
    vue(),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
    Components({
      resolvers: [ElementUiResolver()],
    }),
    // mock 服务
    viteMockServe({
      localEnabled: env.VITE_APP_MOCK_IN_PRODUCTION,
      // prodEnabled: env.VITE_APP_MOCK_IN_PRODUCTION,
    }),
    // Unocss
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ]
}
