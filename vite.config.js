import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
  },
  resolve: {
    alias: {
      '@apis': '/src/apis',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      'queries': '/src/queries',
      '@router': '/src/router',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
    },
  },
})
