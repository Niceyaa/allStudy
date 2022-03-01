const path = require('path')
// html-webpack-plugin 配置自动生成index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 将样式抽离成一个css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 对css文件进行压缩，减小体积
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
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
        }),
        new MiniCssExtractPlugin({
            filename:'style/[contenthash].css'
        })
    ],
    devServer:{
        static: './dist'
    },
    module:{
        rules:[
            // asset module
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
            },
            // loader
            {
                test:/\.(css|less)$/,
                // use:['style-loader','css-loader','less-loader']
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            // babel-loader
            {
                test:/\.js$/,
                exclude: '/node-modules/',
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    },
    optimization:{
        minimizer:[
            new CssMinimizerWebpackPlugin()
        ]
    }

}