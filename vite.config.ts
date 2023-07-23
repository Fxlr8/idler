import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteSVG from "vite-plugin-svelte-svg"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelteSVG({
      svgoConfig: {}, // See https://github.com/svg/svgo#configuration
      requireSuffix: false,
    }),
    svelte()
  ],
})
