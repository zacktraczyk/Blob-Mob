import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import visualizer from 'rollup-plugin-visualizer'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  plugins: [tsconfigPaths(), react(), visualizer(), ViteImageOptimizer()],
  resolve: {
    alias: {
      '@Styles': path.resolve(__dirname, 'src/assets/styles'),
      '@App': path.resolve(__dirname, 'src/App.tsx'),
      '@Apis': path.resolve(__dirname, 'src/apis'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Game': path.resolve(__dirname, 'src/game'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Views': path.resolve(__dirname, 'src/Views'),
    },
  },
}))
