const path = require("path");

module.exports = {
  outputDir: "public"
  context: path.resolve(__dirname, "./"),
  target: "webworker",
  mode: "production",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        include: /node_modules/,
        test: /\.mjs$/,
        type: "javascript/auto",
      },
    ],
  },
};
