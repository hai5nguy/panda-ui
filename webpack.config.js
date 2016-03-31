/* eslint-disable */
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        plugins: [ 'transform-runtime', 'transform-decorators-legacy' ],
        presets: ["es2015", "stage-1", "react"]
      },
      include: [
        path.join(__dirname, '/src')
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};