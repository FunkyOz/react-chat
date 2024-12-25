import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ["lib"],
            tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
            rollupTypes: true,
        }),
    ],
    build: {
        sourcemap: true,
        copyPublicDir: false,
        minify: "esbuild",
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
            fileName: () => "main.js",
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime"],
            output: {
                assetFileNames: "asset/[name][extname]",
            },
        },
    },
});