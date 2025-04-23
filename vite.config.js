import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgeCss from 'vite-plugin-purgecss';

// https://vite.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === 'production' ? '/D4_SecretRoomSearch/' : '/', // 忽略此行process是node的變數，會被lint 偵測未使用到，因此忽略此行檢查
  plugins: [
    react(),
    purgeCss({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // 會掃描這些檔案中有用到的 class
      safelist: [
        // 防止 Bootstrap 或動畫類別被誤砍
        /^btn/, /^modal/, /^fade/, /^show/, /^collapse/, /^navbar/,
        /^text-/, /^bg-/, /^alert/, /^d-/, /^justify-/, /^align-/, /^col-/, /^row/,
      ]
    }),
  ],
})