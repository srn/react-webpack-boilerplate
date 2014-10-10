var webpack = require("webpack");
var path = require('path');

var env = {
  production: true // process.env['NODE_ENV'] === 'production'
};

var addDevServerEntryPoint = function (entryPoint) {
  if (env.production === false) {
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
  contacts: addDevServerEntryPoint('./client/entryPoints/contacts'),
  'common.js': './client/entryPoints/common.js'
};

var plugins = [
  new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
];

if (env.production) {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({ output: {comments: false} })); // https://github.com/webpack/webpack/issues/324
}

if (env.production === false) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

var jsxLoaders = ['jsx?insertPragma=React.DOM'];

if (env.production) {
  jsxLoaders.unshift('react-hot');
}

var exports = {
  entry: entry,

  output: {
    path: env.production ? path.join('client', 'build') : __dirname,

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
