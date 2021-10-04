const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  performance: {
    // ToDo: Warning が出ないようにしているが、サイズが大きいのは問題なので分割等の検討が必要
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [new Dotenv({ path: './.env.development' })],
});
