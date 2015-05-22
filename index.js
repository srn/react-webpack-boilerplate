var path = require('path');

var express = require('express');
var app = express();

var compress = require('compression');
var minify = require('express-minify');
var layouts = require('express-ejs-layouts');

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', {layout:'layout'});
app.set('views', __dirname + '/server/views');

app.use(compress());
app.use(minify());
app.use(layouts);
app.use("/client", express.static(path.join(process.cwd(), 'client')));

var env = {
  production: process.env['NODE_ENV'] === 'production'
};

app.get('/*', function(req, res) {
  res.render('index', {
    env: env
  });
});

var port = Number(process.env.PORT || 3001);
app.listen(port, function () {
  console.log('server running at localhost:3001, go refresh and see magic');
});

if (env.production === false) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var webpackConfig = require('./webpack.dev.config');

  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: '/client/',

    contentBase: './client/',

    inline: true,

    hot: true,

    stats: {
      colors: true
    },

    historyApiFallback: true,

    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('webpack dev server listening on localhost:3000');
  });
}
