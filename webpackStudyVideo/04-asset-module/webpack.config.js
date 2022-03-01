const path = require('path')
// html-webpack-plugin 配置自动生成index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true, // 自动清除dist目录
        assetModuleFilename: 'images/[contenthash][ext]'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: 'body'
        })
    ],
    devServer:{
        static: './dist'
    },
    module:{
        rules:[
            {
                test: /\.png$/,
                type:'asset/resource',
                generator: {
                    // filename:'images/test.png',
                    filename:'images/[contenthash][ext]'
                }
            },
            {
                test:/\.svg$/,
                type:'asset/inline'
            },
            {
                test: /\.txt$/,
                type:'asset/source'
            },
            {
                test: /\.jpg$/,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize: 4*1024*1024
                    }
                }
            }
        ]
    }

}