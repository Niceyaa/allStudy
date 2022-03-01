const path = require('path')
// html-webpack-plugin 配置自动生成index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 将样式抽离成一个css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 对css文件进行压缩，减小体积
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
// 对js文件进行压缩
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
    // 配置多入口
    entry: {
        index:path.resolve(__dirname,'src/index.js'),
        another:path.resolve(__dirname,'src/another.js')
        // 通过这种方式也可以对一些公共的文件做一些提取，但是较麻烦，不易维护
        // index:{
        //     import:path.resolve(__dirname,'src/index.js'),
        //     dependOn:'shared'
        // },
        // another:{
        //     import:path.resolve(__dirname,'src/another.js'),
        //     dependOn:'shared'
        // },
        // shared:'lodash'
    },
    output: {
        filename: 'scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true, // 自动清除dist目录
        assetModuleFilename: 'images/[contenthash][ext]',
        publicPath:'/'
    },
    mode: 'production',
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
                        maxSize: 4*1024
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
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ],
        // 代码分离
        splitChunks:{
            // chunks: 'all'
            // 缓存第三方库
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendors',
                    chunks:'all'
                }
            }
        }
    }

}