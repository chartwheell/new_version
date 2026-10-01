import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://chartwheell.github.io/new_version/, so assets must be
// emitted under that sub-path. Override with BASE_PATH=/ for a root deploy.
const base = process.env.BASE_PATH ?? '/new_version/'

export default defineConfig({
  base,
  plugins: [react()],
})
