const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin =require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = function (env, argv) {
  const isEnvDevelopment = argv.mode === "development" || !argv.mode;
  const isEnvProduction = argv.mode === "production";
  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            name: "vendor",
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            name: "bundle",
          },
        },
      },
    },
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "cheap-module-source-map",
    entry: "./src/index.js",
    // output: {
    //   filename: "bundle.js",
    //   path: path.resolve(__dirname, "dist"),
    // },
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[name].[contenthash:8].chunk.js",
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
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
          include: [
            path.resolve(__dirname, "src/styles"),
            path.resolve(__dirname, "node_modules"),
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
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
            MiniCssExtractPlugin.loader,
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
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Github热门项目",
        favicon: "public/github.png",
        template: "public/index.html",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:8].css",
        chunkFilename: "[name].[contenthash:8].chunk.css",
      }),
      // new BundleAnalyzerPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  };
};
