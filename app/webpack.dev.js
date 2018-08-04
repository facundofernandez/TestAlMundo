const merge = require('webpack-merge');
const { join } = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: { 
        port: process.env.PORT || 8080,
        contentBase: join(__dirname, 'dist/public'),
        watchContentBase: true,
        hot: true
    }
});