const resolve = require("@rollup/plugin-node-resolve");
const babel = require("@rollup/plugin-babel").babel;

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react"],
    plugins: [
      resolve(),
      babel({
        presets: ["@babel/preset-env", "@babel/preset-react"],
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
    ],
  },
];
