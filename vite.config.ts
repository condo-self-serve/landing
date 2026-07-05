import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base stays '/' for a custom domain (e.g. www.condoclar.eu).
// If deploying to https://<user>.github.io/<repo>/ instead, set base: '/<repo>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
