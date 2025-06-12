import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  base: "/portafolio/", // <--- importante para GitHub Pages
  plugins: [
    react(),
    tailwindcss(), // <--- plugin Tailwind para Vite
  ],
});

