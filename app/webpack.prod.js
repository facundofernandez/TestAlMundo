const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { join } = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common,
    { mode: 'production' },
    {
        devServer: { 
            port: process.env.PORT || 8080,
            contentBase: join(__dirname, 'dist/public'),
            watchContentBase: true,
            hot: true
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
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
        }
    }
);
