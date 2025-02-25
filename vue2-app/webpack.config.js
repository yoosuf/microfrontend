const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', // Important for Single SPA
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // Match .vue files
                loader: 'vue-loader'
            },
            {
                test: /\.js$/, // Match .js files
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new VueLoaderPlugin(), // This line is crucial
    ],
    devServer: {
        historyApiFallback: true,
        port: 3001, 
        headers: {
            'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        },
    },
    
};
