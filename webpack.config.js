module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};
