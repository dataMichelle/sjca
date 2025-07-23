import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable CSS minification and optimization
    cssMinify: true,
    // Optimize for mobile - fewer chunks, faster initial load
    rollupOptions: {
      output: {
        // Reduce chunk splitting for mobile performance
        manualChunks: {
          // Only split heavy libraries
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Enable tree shaking to reduce unused JavaScript
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    // Increase chunk size limit for fewer requests
    chunkSizeWarningLimit: 1000,
  },
  // Preload critical resources
  server: {
    warmup: {
      clientFiles: ['./src/main.jsx', './src/App.jsx', './src/views/Home.jsx'],
    },
  },
});
