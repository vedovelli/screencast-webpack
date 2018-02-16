
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    fale: './src/fale.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin(
      ['./dist/*.*'],
      {
        root: __dirname,
        watch: true
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [path.resolve(__dirname, '../node_modules/babel-preset-env')]
          }
        }
      }
    ]
  }
}
