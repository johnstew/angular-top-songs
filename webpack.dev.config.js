var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: './dev',
    filename: 'main.bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: './dev'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular Top Songs',
      template: './index-template.ejs'
    })
  ]
};
