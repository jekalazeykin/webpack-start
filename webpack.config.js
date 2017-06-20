const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const devEnv = 'development'
const NODE_ENV = process.env.NODE_ENV || devEnv

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    devtool: NODE_ENV === devEnv ? 'inline-source-map' : 'hidden-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'static')
    }
}
