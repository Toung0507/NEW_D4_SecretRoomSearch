import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    // eslint-disable-next-line no-undef
    base: process.env.NODE_ENV === 'production' ? '/D4_SecretRoomSearch/' : '/', // 忽略此行process是node的變數，會被lint 偵測未使用到，因此忽略此行檢查
    plugins: [react()],
})
