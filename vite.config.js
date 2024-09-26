import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    historyApiFallback: true, // Ensure fallback is set
    proxy: {
      "/api/v1": {
        target: "https://almasetu.onrender.com", 
        changeOrigin: true, 
        secure: false,
      },
    },
  },
  plugins: [react()],
});
