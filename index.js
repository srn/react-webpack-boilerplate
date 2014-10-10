var path = require('path');
var express = require('express');
var app = express();
var compress = require('compression');
var layouts = require('express-ejs-layouts');
var fs = require('fs');

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', { layout:'layout' });

app.use(compress());
app.use("/client", express.static(path.join(__dirname, 'client')));
app.use(layouts);

var env = {
  production: true // process.env['NODE_ENV'] === 'production'
};

app.get('/contacts', function(req, res) {
  fs.readFile(path.join(__dirname, 'client/build/common.js'), { encoding: 'utf8' }, function(err, data) {
    if (err) {
      throw err;
    }

    res.render('contacts', {
      locals: {
        entryPoint: 'contacts',
        env: env,
        inlineCommon: data
      }
    });
  });
});

app.get('/*', function(req, res) {
  res.render('index', {
    locals: {
      env: env,
      entryPoint: 'index'
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
