import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import swc from 'vite-plugin-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), swc()],
});