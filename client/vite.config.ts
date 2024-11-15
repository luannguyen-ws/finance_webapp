import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Replace @ as src folder for shorter import calling
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]
  }
})
