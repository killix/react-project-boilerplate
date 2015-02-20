var webpack = require('webpack');
var path = require('path');

module.exports = {
  'entry': {
    'index' : ['./index.js']
  },

  module : {
    'loaders' : [
      { 'test': /\.jsx?$/, loaders: [ 'babel-loader'], 'exclude': /node_modules/ },
    ]
  },

  'output': {
    'path': path.resolve(__dirname, '../public/'),
    'filename' : '[name].js',
    'publicPath' : '/public/'
  },

  'context': path.resolve( __dirname, '../client'),

  'resolve': {
    'modulesDirectories': ['shared', 'node_modules', 'client' ],
    'extensions': ['', '.jsx', '.js','.json']
  },

  'plugins': [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
};
