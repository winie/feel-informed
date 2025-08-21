import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Read base from enviroment variable.
// If it is not provided, ignore it.
const base = process?.env.BASE ?? undefined;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
})
