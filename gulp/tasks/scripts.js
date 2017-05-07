var gulg = require('gulp'),
 webpack = require('webpack');


gulg.task('scripts', function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if(err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
});
