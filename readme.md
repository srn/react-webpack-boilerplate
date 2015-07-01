# react-webpack-boilerplate
[![Build Status](http://img.shields.io/travis/srn/react-webpack-boilerplate.svg?style=flat-square)](https://travis-ci.org/srn/react-webpack-boilerplate) [![Dependency Status](http://img.shields.io/gemnasium/srn/react-webpack-boilerplate.svg?style=flat-square)](https://gemnasium.com/srn/react-webpack-boilerplate) [![Build Status](http://img.shields.io/coveralls/srn/react-webpack-boilerplate.svg?style=flat-square)](https://coveralls.io/r/srn/react-webpack-boilerplate)

> Simple production-ready boilerplate for [React](http://facebook.github.io/react/) and [Webpack](http://webpack.github.io/) (SASS and React hot reloading)

## Install

Clone repository and run:

```sh
$ npm install
```

Alternatively, you can deploy your own copy with one click using this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/srn/react-webpack-boilerplate)

## iojs

If you'd rather want to use `iojs` you need to install a newer version of `jest` than what is currently 
available on npm. Jest uses a newer version of `jsdom` where support for `<= 0.12` has been dropped in order to move 
the project further. As of [#374](https://github.com/facebook/jest/pull/374), Jest should work on latest io.js. 
It's currently in a separate branch, [facebook/jest/tree/0.5.x](https://github.com/facebook/jest/tree/0.5.x), and can also be installed via npm `facebook/jest#0.5.x`.

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

Coverage

```sh
$ npm test -- --coverage
```

## License

MIT © [Søren Brokær](http://srn.io)
