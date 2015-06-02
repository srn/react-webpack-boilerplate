var webpack = require("webpack");

var path = require('path');
var objectAssign = require('object-assign');

var _env = process.env['NODE_ENV'];

var env = {
  production: _env === 'production',
  staging: _env === 'staging',
  test: _env === 'test',
  development: _env === 'development' || typeof _env === 'undefined'
};

objectAssign(env, {
  build: (env.production || env.staging)
});

module.exports = {
  target: 'web',

  entry: './client/entry.jsx',

  output: {
    path: path.join(process.cwd(), '/client'),
    pathInfo: true,
    publicPath: 'http://localhost:3000/client/',
    filename: 'main.js'
  },

  resolve: {
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'client'
    ],
    extentions: ['js', 'jsx', 'scss']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: "'" + (_env) + "'"
    })
  ],

  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],

    loaders: [
      {test: /\.scss$/, loader: "style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded"}
    ],

    noParse: /\.min\.js/
  }

};
