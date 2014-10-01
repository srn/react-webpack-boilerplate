var webpack = require("webpack");
var path = require('path');

var env = {
  production: process.env['NODE_ENV'] === 'production'
};

var entry = [
  './client/app'
];

var plugins = [];

if (env.production) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({ output: {comments: false} })); // https://github.com/webpack/webpack/issues/324
}

if (env.production === false) {
  entry.unshift('webpack/hot/dev-server');
  entry.unshift('webpack-dev-server/client?http://localhost:3000');

  plugins.push(new webpack.HotModuleReplacementPlugin());
}

var exports = {
  entry: entry,

  output: {
    path: env.production ? path.join('client', 'build') : __dirname,

    filename: "bundle.js",

    publicPath: env.production ? 'http://www.production-site.com' : 'http://localhost:3000/client/'
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  },

  plugins: plugins,

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded"
      },
      {
        test: /\.jsx$/,
        loaders: ['jsx?insertPragma=React.DOM']
      }
    ]
  }
};

if (env.production) {
  exports['devtool'] = 'source-map';
}

module.exports = exports;
