import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import postcssimport from "postcss-import";
import postcsscsso from "postcss-csso";
import autoprefixer from "autoprefixer";
import rpg from "rollup-plugin-gzip";
import { brotliCompressSync } from "zlib";

export default [
  // export view
  {
    input: "src/assets/js/view.js",
    output: {
      file: "dist/bundle.js",
      format: "iife",
    },
    plugins: [
      nodeResolve(),
      rpg(),
      rpg({
        customCompression: (content) =>
          brotliCompressSync(Buffer.from(content)),
        fileName: ".br",
      }),
    ],
  },
  {
    input: "src/app.js",
    output: {
      file: "index.js",
      format: "cjs",
    },
    plugins: [
      postcss({
        extract: "dist/style.css",
        plugins: [
          tailwindcss(),
          postcssimport(),
          postcsscsso(),
          autoprefixer(),
        ],
      }),
      rpg({
        filter: /\.css$/,
      }),
      rpg({
        filter: /\.css$/,
        customCompression: (content) =>
          brotliCompressSync(Buffer.from(content)),
        fileName: ".br",
      }),
    ],
  },
];
