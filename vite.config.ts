import path from "path";
import { UserConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
const config: UserConfig = {
  optimizeDeps:{
    exclude:['svelte-routing']
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      "@app": path.resolve("./src"),
    },
  },
  build: {
    outDir: "build"
  }
};

export default config;
