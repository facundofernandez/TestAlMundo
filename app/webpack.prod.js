const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common,
    { mode: 'production' },
    {
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
