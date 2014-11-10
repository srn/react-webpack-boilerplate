var path = require('path');
var express = require('express');
var app = express();
var compress = require('compression');
var layouts = require('express-ejs-layouts');
var fs = require('fs');

var Promise = require("bluebird");

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', { layout:'layout' });

app.use(compress());
app.use("/client", express.static(path.join(__dirname, 'client')));
app.use(layouts);

var env = {
  production: process.env['NODE_ENV'] === 'production'
};

var retrieveCommonFileData = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path.join(__dirname, filePath), { encoding: 'utf8' }, function(err, data) {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
};

app.get('/*', function(req, res) {
  /*
  var common = retrieveCommonFileData('client/build/common.js');

  // use settle for future usage
  Promise.settle([common]).done(function (results) {
    res.render('index', {
      locals: {
        env: env,
        entryPoint: 'index',
        inlineCommon: results[0].value()
      }
    });
  });
  */

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
