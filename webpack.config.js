var Webpack = require('webpack');
var path = require('path');
var entries;
var entriesKeys;

var WebPackConfig = module.exports = {
  'entry': {
    'index' : ['./index.js']
  },

  module : {
    'loaders' : [
      { 'test': /\.jsx?$/, loaders: [ '6to5-loader'], 'exclude': /node_modules/ },
      { 'test': /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },

  'output': {
    'path': path.resolve('public/'),
    'filename' : '[name].bundled.js',
    'publicPath' : '/public/'
  },

  'context': path.resolve( __dirname, 'client'),

  'resolve': {
    'modulesDirectories': ['shared', 'node_modules', 'client'],
    'extensions': ['', '.js','.json', '.styl']
  },

  'plugins': [
    new Webpack.optimize.CommonsChunkPlugin('shared.js'),
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


if (process.env.NODE_ENV === 'development') {
  entries = (WebPackConfig.entry || WebPackConfig.entries);

  if (typeof(entries) !== "string") {
    if (Array.isArray(entries)) {
      entries = entries.reduce(function(acc, cur) {
        acc[path.basename(cur).replace(/\.jsx?$/, "")] = cur;
        return acc;
      }, {});
    }

    entriesKeys = Object.keys(entries);
    entriesKeys.forEach(function(key) {
      if (!Array.isArray(entriesKeys[key])) {
        entries[key] = entries[key];
      }
      entries[key].unshift(
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server'
      );
    });
  }

  // Allows react-hot-loaders to overwrite already loaded modules
  WebPackConfig.devtool = 'eval';
  WebPackConfig.module.loaders.forEach(function(loader) {
    if (loader.test.test(".js")) {
      if (loader.loaders) {
        loader.loaders.unshift('react-hot');
      } else {
        loader.loader = 'react-hot!' + loader.loader;
      }
    }
  });

  // Exposes React.js to global scope
  WebPackConfig.module.loaders.push({ 'test': require.resolve("react"), 'loader': "expose?React" });

  // Removes the production Plugins
  WebPackConfig.plugins = [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new Webpack.NoErrorsPlugin()
  ];
};

console.log(JSON.stringify(WebPackConfig, 0, 2));
