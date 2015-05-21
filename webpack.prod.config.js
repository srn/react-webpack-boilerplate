'use strict';

var webpack = require("webpack");
var config = require('./webpack.base.config.js');

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = '#source-map';

config.output = {
  path: './client/dist',
  pathInfo: true,
  publicPath: '/client/',
  filename: 'main.min.js'
};

config.plugins = config.plugins.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
]);

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loaders: [ 'babel'], exclude: /node_modules/}
]);

module.exports = config;
