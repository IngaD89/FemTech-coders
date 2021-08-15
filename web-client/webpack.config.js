const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    entry: [
        path.join(__dirname, 'src/js/main.js'),
        path.join(__dirname, 'src/scss/main.scss')
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),

    },
    resolve: {
        extensions: [".js", ".jsx", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[fullhash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[fullhash].css'
        }),

]

}
