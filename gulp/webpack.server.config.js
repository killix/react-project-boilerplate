var webpack = require('webpack');
var path = require('path');

module.exports = {
  'entry': {
    'index' : ['./server']
  },

  module : {
    'loaders' : [
      { 'test': /\.jsx?$/, loaders: [ 'babel-loader'], 'exclude': /node_modules/ },
      { 'test': /\.json$/, loader: "json" }
    ]
  },

  'output': {
    'path': path.resolve(__dirname, '../'),
    'filename' : '[name].js',
    'pathinfo': true
  },

  'context': path.resolve( __dirname, '../src'),

  'resolve': {
    'modulesDirectories': ['shared', 'node_modules', 'src' ],
    'extensions': ['', '.jsx', '.js','.json']
  },

  'plugins': [
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],

  'target' : 'node',

  'node': {
    '__dirname': true
  }
};
