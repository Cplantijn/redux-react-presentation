const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    test: /\.jsx?$/i,
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
    },
    {
      test: /\.(jpe?g|png|mp4)$/i,
      loader: 'file'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
  ]},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: './public'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      classnames: 'classnames'
    })
  ]
};
