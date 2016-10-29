const path = require('path');
const webpack = require('webpack');

const DIST_PATH = path.resolve(__dirname, 'dist');
const SOURCE_PATH = path.resolve(__dirname, 'src');

module.exports = {
    devtool: 'source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      `${SOURCE_PATH}/app.js`,
    ],
    module: {
        loaders: [{
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                plugins: 'react-hot-loader/babel',
                presets: [
                    'es2015',
                    'react',
                    'stage-2',
                ],
            },
            test: /.jsx?$/,
        }],
    },
    output: {
        filename: 'app.dist.js',
        path: DIST_PATH,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: { extensions: ['', '.js', '.jsx'] },
};
