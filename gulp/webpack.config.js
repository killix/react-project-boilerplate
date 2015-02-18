var Webpack = require('webpack');
var path = require('path');

var WebPackConfig = module.exports = {
  'entry': {
    'index' : ['./index.js']
  },

  module : {
    'loaders' : [
      { 'test': /\.jsx?$/, loaders: [ '6to5-loader'], 'exclude': /node_modules/ },
    ]
  },

  'output': {
    'path': path.resolve('../public/'),
    'filename' : '[name].js',
    'publicPath' : '/public/'
  },

  'context': path.resolve( __dirname, '../client/js'),

  'resolve': {
    'modulesDirectories': ['shared', 'node_modules', 'client/js' ],
    'extensions': ['', '.jsx', '.js','.json']
  },

  'plugins': [
    new Webpack.optimize.UglifyJsPlugin(),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new Webpack.NoErrorsPlugin()
  ]
};
