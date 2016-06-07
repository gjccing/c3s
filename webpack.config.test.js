const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
  entry: [path.join(__dirname, '/test/main.js')],
  resolve: {
    //When require, do not have to add these extensions to file's name
    extensions: ["", ".js"],
    //node_modules: ["web_modules", "node_modules"]  (Default Settings)
  },
  //Render source-map file for final build
  // devtool: 'source-map',
  // output config
  output: {
    path: buildPath,    //Path of output file
    filename: 'c3s-parser.test.js',  //Name of output file
  },
  plugins: [
    //Minify the bundle
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     //supresses warnings, usually from module minification
    //     warnings: false,
    //   },
    // }),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    // new webpack.NoErrorsPlugin(),
  ],



  module: {
    preLoaders: [
        { 
          test: /\.js$/, 
          loader: path.join(__dirname, 'macro-loader.js'),
          exclude: [nodeModulesPath]
        }
    ],
    loaders: [
      {
        test: /\.js$/, // All .js files
        loader: 'babel-loader', //react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
        query: {
          presets: ['es2015'],
          plugins: ["macros"]
        }
      },
      {
        test: /\.pegjs$/,
        loader: 'pegjs-loader',
        exclude: [nodeModulesPath],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [nodeModulesPath],
      }
    ],
  },
  //Eslint config
  eslint: {
    configFile: '.eslintrc', //Rules for eslint
  },
};

module.exports = config;
