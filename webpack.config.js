var webpack = require("webpack");
var path = require('path');

var currentEnv = process.env['NODE_ENV'];

var env = {
  production: currentEnv === 'production',
  development: currentEnv === 'development',
  test: currentEnv === 'test'
};

var addDevServerEntryPoint = function (entryPoint) {
  if (currentEnv !== 'production') {
    var entries = [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      entryPoint
    ];
    return entries;
  } else {
    return entryPoint;
  }
};

var entry = {
  index: addDevServerEntryPoint('./client/entryPoints/index'),
  contacts: addDevServerEntryPoint('./client/entryPoints/contacts')
};

if (currentEnv !== 'test') {
  entry['common.js'] = './client/entryPoints/common.js'
}

var plugins = [];

if (currentEnv !== 'test') {
  plugins.push(new webpack.optimize.CommonsChunkPlugin('common', 'common.js'));
}

if (env.production) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({ output: {comments: false} })); // https://github.com/webpack/webpack/issues/324
}

if (env.production === false) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

var jsxLoaders = ['jsx?insertPragma=React.DOM'];

if (env.production === false) {
  jsxLoaders.unshift('react-hot');
}

var exports = {
  entry: entry,

  output: {
    path: env.production ? path.join('client', 'build') : __dirname + '/client',

    filename: "[name].entry.js",

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
        loaders: jsxLoaders
      }
    ]
  }
};

if (env.production) {
  exports['devtool'] = 'source-map';
}

module.exports = exports;
