// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import dotenv from 'dotenv';

// Load `.env` file before accessing process.env
dotenv.config();

const disableEslint = process.env.DISABLE_ESLINT_PLUGIN === 'true';

export default defineConfig({
  plugins: [
    react(),
    !disableEslint && eslint(), // only include plugin if not disabled
  ].filter(Boolean),
  build: {
    sourcemap: false, // equivalent to GENERATE_SOURCEMAP=false
  },
});
