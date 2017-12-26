'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ProvidePlugin = webpack.ProvidePlugin;
const devtool = 'source-map';


const entry = {
    app: ['babel-polyfill', path.resolve(__dirname, 'src/app/app.module.js')]
};

const _module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{ loader: 'ng-annotate-loader' }, { loader: 'babel-loader' }]
        },
        {
            test: /\.html$/,
            use: [{ loader: 'raw-loader' }]
        },
        {
            test: /\.(scss|sass)$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
                /* sass-resources-loader */
            ]
        },
        {
            test: /\.(jpg|png|gif)$/,
            use: [{ loader: 'file-loader' }]
        },
        {
            test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
            use: [{ loader: 'file-loader' }]
        }
    ]
};

const plugins = [
    new ProvidePlugin({
        'window.jQuery': 'jquery'
    }),

    new LodashWebpackPlugin({
        collections: true,
        paths: true
    }),

    new ExtractTextPlugin({
        filename: '[name].[contenthash].css'
    }),

    new HtmlWebpackPlugin({
        hash: true,
        inject: 'body',
        template: path.resolve(__dirname, 'src/index.html')
    }),

    new CommonsChunkPlugin({
        minChunks: (module, count) =>
            module.resource &&
            module.resource.indexOf(path.resolve(__dirname, 'src')) === -1,
        name: 'vendor'
    })
];

module.exports = {
    devtool,
    entry,
    module: _module,
    plugins
};
