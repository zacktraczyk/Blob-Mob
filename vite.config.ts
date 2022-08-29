import { defineConfig } from "vite";
import visualizer from "rollup-plugin-visualizer";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Blob-Mob/",
  plugins: [tsconfigPaths(), react(), visualizer()],
  resolve: {
    alias: {
      "@Styles": path.resolve(__dirname, "src/assets/styles"),
    },
  },
});
