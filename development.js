'use strict';

const path = require('path');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

webpackConfig.devServer = {
    compress: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    port: 3000,
    watchContentBase: true
};

webpackConfig.devtool = 'inline-source-map';

webpackConfig.output = {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: '/'
};

webpackConfig.plugins.push(new HotModuleReplacementPlugin());

module.exports = webpackConfig;
