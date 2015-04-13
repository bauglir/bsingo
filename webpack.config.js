module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(eot|woff2?|ttf|svg)$/, loader: 'file' }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};
