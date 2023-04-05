const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, args) => {
  const isProd = args.mode === "production";
  return {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
      main: "./js/index.js",
      // shelter: "./js/shelter.js",
    },

    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      port: 3726,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        minify: {
          removeComments: isProd,
          collapseWhitespace: isProd,
        },
      }),
      new HtmlWebpackPlugin({
        filename: 'shelter.html',
        template: 'shelter.html',
        chunks: ['shelter']
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src/assets"),
            to: 'assets',
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    optimization: {
      minimize: isProd,
    },
  }
};
