import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'src/App.vue'),
            formats: ['es']
        },
        rollupOptions: {
            //  dependencies we dont want to bundle
            external: ['vue', '@visuallyjs/browser-ui', '@visuallyjs/browser-ui-vue']
        }
    }
})
