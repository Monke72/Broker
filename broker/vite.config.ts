import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
// import path from "path";

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared/"),
    },
  },
});
