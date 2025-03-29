import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const SERVER_URL = mode === "development" ? env.VITE_BASE_URI : env.VITE_PROD_URI;

  console.log(" SERVER_URL:", SERVER_URL);
  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: "/src",
        components: "/src/components",
        features: "/src/features",
        assets: "/src/assets",
      },
    },
    server: {
      proxy: {
        "/api": {
          target: SERVER_URL,
          changeOrigin: true,
          secure: false,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
