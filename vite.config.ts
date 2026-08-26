import { defineConfig } from "vitest/config";
import solidPlugin from "vite-plugin-solid";
import civetPlugin from "@danielx/civet/vite";

export default defineConfig({
  base: "./",
  plugins: [
    civetPlugin({ ts: "preserve" }),
    solidPlugin(),
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
    include: ["src/**/*.test.civet"],
  },
});
