const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: {
          test: /(node_modules|bower_components)/,
          exclude: path.resolve(__dirname, './node_modules/debug-es')
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
