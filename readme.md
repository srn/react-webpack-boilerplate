# react-webpack-boilerplate
[![Build Status](http://img.shields.io/travis/srn/react-webpack-boilerplate.svg?style=flat-square)](https://travis-ci.org/srn/react-webpack-boilerplate) [![Dependency Status](http://img.shields.io/gemnasium/srn/react-webpack-boilerplate.svg?style=flat-square)](https://gemnasium.com/srn/react-webpack-boilerplate) [![Build Status](http://img.shields.io/coveralls/srn/react-webpack-boilerplate.svg?style=flat-square)](https://coveralls.io/r/srn/react-webpack-boilerplate)

> Simple production-ready boilerplate for [React](http://facebook.github.io/react/) and [Webpack](http://webpack.github.io/) (SASS and React hot reloading)

## Install

```sh
# Clone repository
$ git clone https://github.com/srn/react-webpack-boilerplate.git && cd react-webpack-boilerplate

# Install dependencies
$ npm install
```

Alternatively, you can deploy your own copy with one click using this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/srn/react-webpack-boilerplate)

## Development

```sh
$ npm start
```

Go to [http://localhost:3001](http://localhost:3001) and see the magic happen.

## Production

If you want to run the project in production, set the `NODE_ENV` environment variable to `production`.

```sh
$ NODE_ENV=production npm start
```

Also build the production bundle:

```sh
$ npm run dist
```

## Tests

```sh
$ npm test
```

Only run specific tests

```sh
$ npm test -- NotFoundComponent
```

## License

MIT © [Søren Brokær](http://srn.io)
