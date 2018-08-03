'use strict';

const { resolve, join } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';

let entry = resolve(__dirname, "./src/app.js");
let output = "main.js";

const config = {
    mode: isDev ? 'development' : 'production',
    // Archivo/s de entrada a interactuar
    entry: entry,
    // Archivo de Salida
    output: {
        filename: output,
        path: resolve(__dirname, 'dist/public/js')
    },
    devServer: { //object
        port: 8080,
        contentBase: join(__dirname, 'dist/public'),
        watchContentBase: true,
        hot: true
    },

    // Modulos para los loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions:{
                output: {
                  comments: false, // remove comments
                },
                compress: {
                  unused: true,
                  dead_code: true, // big one--strip code that will never execute
                  warnings: false, // good for prod apps so users can't peek behind curtain
                  drop_debugger: true,
                  conditionals: true,
                  evaluate: true,
                  drop_console: true, // strips console statements
                  sequences: true,
                  booleans: true,
                  
                },
                
              }
          })
        ]
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
            // chunkFilename: '../css/[id].css',
        })
    ]
};

module.exports = config;
