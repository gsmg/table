const path = require('path');

module.exports = {
  entry: './src/plugin.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    library: 'Table',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?removeSVGTagAttrs=false'
      }
    ]
  }
};