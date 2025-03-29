import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [
    json(),
    nodeResolve({
      extensions: [".ts", ".tsx"],
      mainFields: ["module", "main", "browser"],
      moduleDirectories: ["src"],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
