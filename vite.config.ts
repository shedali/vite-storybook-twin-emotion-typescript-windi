import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import WindiCSS from "vite-plugin-windicss";
import "./src/index.css";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

//library mode https://vitejs.dev/guide/build.html#library-mode
//github.com/ben-rogerson/twin.examples/blob/master/vite-emotion-typescript/vite.config.ts
//github.com/storybookjs/builder-vite/issues/210
export default defineConfig(() => ({
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `
      // import React from 'react';
      import { jsx } from '@emotion/react';
    `,
  },
  test: {},
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: isExternal,
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    // dts(),
    react({
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      fastRefresh: true,
      jsxImportSource: "@emotion/react",
      jsxRuntime: "automatic",
      babel: { plugins: ["@emotion/babel-plugin"] },
    }),
    WindiCSS(),
    macrosPlugin(),
  ],
}));
