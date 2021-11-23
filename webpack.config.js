const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === "development" || !argv.mode;
  const isEnvProduction = argv.mode === "production";
  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: "pre",
          use: ["babel-loader", "eslint-loader"],
        },
        // {
        //   test: /\.css$/,
        //   exclude:[path.resolve(__dirname,'src/styles'), /node_modules/],
        //   use: [
        //   'style-loader',
        //   'css-loader?modules'
        //   ]
        // },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
          include: [
            path.resolve(__dirname, "src/styles"),
            path.resolve(__dirname, "node_modules"),
          ],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            // 'css-loader?modules'
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]--[hash:base64:5]",
                },
              },
            },
            "less-loader",
            "postcss-loader",
          ],
          exclude: [
            path.resolve(__dirname, "src/styles"),
            path.resolve(__dirname, "node_modules"),
          ],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]",
                },
                importLoaders: 2,
              },
            },
            "postcss-loader",
            {
              loader: "less-loader",
            },
          ],
        },
        // {test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000'},
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
      // new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve("src"),
        utils: path.resolve("./src/utils"),
      },
    },
    devServer: {
      // contentBase: "./dist",
      host: process.env.HOST || "127.0.0.1",
      port: process.env.PORT || 8080,
      hot: true,
      // proxy: {
      //   '/api': {
      //     target: 'http://you-awesome.api',
      //     pathRewrite: { '^/api': '' },
      //     secure: false,
      //     changeOrigin: true,
      //   },
      // },
    },
  };
};
