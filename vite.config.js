import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Tiendita-Aprendiendo-React/',
  resolve: {
    alias: {
      '@': [path.resolve(__dirname, './src')],
      '@context': path.resolve(__dirname, './src/context'),
      '@shared': path.resolve(__dirname, './src/shared')
    }
  }
})
