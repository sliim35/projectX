/* eslint-disable */
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

function build() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error(err.stack || err);

        if (err.details) {
          console.error(err.details);
        }

        reject();
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
        reject();
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }

      console.log(
        stats.toString({
          chunks: false, // Makes the build much quieter
          colors: true, // Shows colors in the console
        })
      );
    });
  }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

export default build;
