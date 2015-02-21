var webpack = require('webpack');
var path = require('path');

module.exports = {
  'entry': {
    'index' : ['./server.js']
  },

  module : {
    'loaders' : [
      { 'test': /\.jsx?$/, loaders: [ 'babel-loader'], 'exclude': /node_modules/ },
    ]
  },

  'output': {
    'path': path.resolve(__dirname, '../'),
    'filename' : '[name].js',
    'publicPath' : '/'
  },

  'context': path.resolve( __dirname, '../src'),

  'resolve': {
    'modulesDirectories': ['shared', 'node_modules' ],
    'extensions': ['', '.jsx', '.js']
  },

  'target': 'node',

  'plugins': [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
