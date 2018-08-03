'use strict';

const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

// assets.js
const Assets = require('./assets');

const isDev = process.env.NODE_ENV === 'development';

let entry = resolve(__dirname, "./src/app.js");
let output = "main.js";

const config = {
    entry: entry,
    output: {
        filename: output,
        path: resolve(__dirname, 'dist/public/js')
    },
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

    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
            // chunkFilename: '../css/[id].css',
        }),
        new CopyWebpackPlugin(
            Assets.map(asset => {
                return {
                    from: resolve(__dirname, `../node_modules/${asset}`),
                    to: resolve(__dirname, './dist/public/npm')
                };
            })
        )
    ]
};


module.exports = config;
