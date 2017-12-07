'use strict'

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const env = require('yargs').argv.env

let libraryName = 'coderbox-atoms'
let plugins = [
  new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}}),
  new webpack.NamedModulesPlugin()
]

if (env === 'production') {
  plugins = [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
}

const paths = {
  libSrc: path.resolve(__dirname, 'src'),
  libIndex: path.resolve(__dirname, 'src/index.tsx'),
  libOutputDir: path.resolve(__dirname, 'lib'),
  libModules: path.resolve(__dirname, 'node_modules')
}

module.exports = {
  entry: paths.libIndex,
  output: {
    path: paths.libOutputDir,
    filename: libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    modules: [paths.libModules, paths.libSrc]
  },
  externals: [nodeExternals()],
  plugins: plugins
}
