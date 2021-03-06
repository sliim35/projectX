import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

const options = {
  hot: true,
  host: '0.0.0.0',
  historyApiFallback: true,
  contentBase: config.output.path,
  watchContentBase: true,
  compress: true,
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(3000, '0.0.0.0', () => {
  console.log('Starting on localhost:3000...');
});
