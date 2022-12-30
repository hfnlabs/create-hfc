import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineHfcPackConfig } from 'hfcpack';

export default defineHfcPackConfig({
  entry: "./src/index.js",
  plugins: [svelte()],
});
