const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');
const optimize = process.env.NODE_ENV === 'production';

const paths = {
  build: path.resolve(__dirname, 'public/build'),
  src: path.resolve(__dirname, 'src'),
  nodeModules: path.resolve(__dirname, 'node_modules')
};

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    paths.src + '/index.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: paths.src,
        loaders: optimize ? ['babel'] : ['react-hot', 'babel'],
        exclude: /node_modules/
        /*
        query: {
          plugins: ['lodash'],
          presets: ['es2015']
        }
        */
      },
      {
        test: /\.jsx?/,
        include: paths.nodeModules + '/react-composing-proto-child',
        loaders: optimize ? ['babel'] : ['react-hot', 'babel']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval',
  output: {
    path: paths.build,
    filename: 'bundle.js',
    publicPath: '/build/'
  }
};

if (optimize) {
  /* eslint-disable fp/no-mutation */
  config.entry = config.entry.filter(e => !/dev-server/.test(e));
  config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ];
  config.devtool = 'cheap-module-source-map';
}

if (process.env.STATS) {
  config.plugins.push(new Visualizer());
}

module.exports = config;
