// based on https://lmiller1990.github.io/electic/posts/20200406_webpack_for_vue_3.html
const path = require("path");

const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          customElement: true,
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
      <html>
      <head>
        <title>Webpack example</title>
      </head>
      <body>
        <my-spass>Webpack Spass!</my-spass>
      </body>
      </html>
    `,
    }),
    // as per https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
  },
};
