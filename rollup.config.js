import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import postcssimport from "postcss-import";
import postcsscsso from "postcss-csso";
import autoprefixer from "autoprefixer";
import rpg from "rollup-plugin-gzip";
import { brotliCompressSync } from "zlib";

const Br = {
  customCompression: (content) => brotliCompressSync(Buffer.from(content)),
  fileName: ".br",
};

export default [
  // export view
  {
    input: "src/assets/js/view.js",
    output: {
      file: "dist/public/bundle.js",
      format: "iife",
    },
    plugins: [
      postcss({
        extract: "style.css",
        minimize: true,
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
      rpg((Br.filter = /\.css$/)),
      nodeResolve(),
      rpg(),
      rpg(Br),
    ],
  },
];
