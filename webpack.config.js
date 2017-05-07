const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "App.js",
    path: path.resolve('D:/', "git/travel-site/app/temp/scripts")
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
