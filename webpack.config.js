const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "cheap-module-source-map" : "nosources-source-map";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
    filename: "[name].[contenthash].js",
    // publicPath: "/public/",
    assetModuleFilename: "assets/[name][ext]",
  },
  mode,
  devtool,
  target,

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(?:eot|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /\.module\.(c|sa|sc)ss$/i,

        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      {
        test: /\.module\.(c|sa|sc)ss$/i,

        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][local]__[sha1:hash:hex:7]",
              },
            },
          },
        ],
      },
    ],
  },
};
