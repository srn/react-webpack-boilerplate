var path = require('path');
var express = require('express');
var app = express();
var compress = require('compression');

app.use(compress());
app.use("/client", express.static(path.join(__dirname, 'client')));
app.set('view engine', 'ejs');

var env = {
  production: process.env['NODE_ENV'] === 'production'
};

app.get('/*', function(req, res) {
  res.render('index', {
    locals: {
      env: env
    }
  });
});

var port = Number(process.env.PORT || 3001);
app.listen(port, function () {
  console.log('server running at localhost:3001, go refresh and see magic');
});

if (env.production === false) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var webpackConfig = require('./webpack.config');

  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,

    hot: true,

    stats: {
      colors: true
    },

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
