const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        primary: './src/main.js',
        system: './src/system.js' 
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', 
    },
    // externals: {
    //     'single-spa': 'single-spa', // Mark single-spa as external
    // },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/, 
                loader: 'babel-loader',
                exclude: /node_modules/, 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new VueLoaderPlugin(), 
    ],
    devServer: {
        historyApiFallback: true,
        port: 3001, 
        headers: {
            'Access-Control-Allow-Origin': '*', 
        },
    },
};
