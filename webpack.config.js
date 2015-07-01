var isProduction = process.env.NODE_ENV === 'production';
var config = isProduction ? require('./webpack.prod.config.js') : require('./webpack.base.config.js');

module.exports = config;
