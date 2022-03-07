const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: 'development',

    entry: path.resolve(__dirname,'app.js'),

    devtool: false,

    plugins: [
        new HtmlWebpackPlugin()
    ]

}