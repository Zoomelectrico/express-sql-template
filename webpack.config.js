const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const javascript = {
  test: /\.(js)$/,
  use: [{ loader: "babel-loader", options: { presets: ["@babel/env"] } }]
};

const postcss = {
  loader: "postcss-loader",
  options: {
    plugins() {
      return [autoprefixer({ browsers: "last 3 versions" })];
    }
  }
};

const styles = {
  test: /\.(scss)$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", postcss, "sass-loader"]
};

const file = {
  test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: [
    {
      loader: "file-loader",
      options: {
        useRelativePath: process.env.NODE_ENV === "production"
      }
    }
  ]
};

const config = {
  mode: "development",
  entry: "./public/js/main.js",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public", "dist")
  },
  module: {
    rules: [javascript, styles, file]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

process.noDeprecation = true;

module.exports = config;
