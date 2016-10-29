const path = require('path');

const DIST_PATH = path.resolve(__dirname, 'dist');
const SOURCE_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: `${SOURCE_PATH}/app.js`,
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
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
};
