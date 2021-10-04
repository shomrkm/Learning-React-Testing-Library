const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    host: 'localhost',
    hot: true,
    open: true,
    port: 80,
    disableHostCheck: true,
  },
  plugins: [new Dotenv()],
});
