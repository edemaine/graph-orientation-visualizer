import { defineConfig } from "vitest/config";
import solidPlugin from "vite-plugin-solid";
import civetPlugin from "@danielx/civet/vite";

export default defineConfig(({ mode }) => ({
  base: "./",
  plugins: [
    civetPlugin({ ts: "preserve" }),
    solidPlugin({ hot: mode !== "test" }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  css: {
    preprocessorOptions: {
      sass: {},
    },
  },
  test: {
    include: ["test/**/*.civet"],
  },
}));
