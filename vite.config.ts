import path from 'path';
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import postcssExtendRule from 'postcss-extend-rule'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssExtendRule
      ]
    }
  }
})
