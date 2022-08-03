import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        crosa: fileURLToPath(new URL('./src/crosa.ts', import.meta.url)),
      },
      output: {
        dir: 'dist/duocnv-crosa',
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
})
