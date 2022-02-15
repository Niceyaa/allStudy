const path = require('path')
const yaml = require('yamljs')
const toml = require('toml')
const json5 = require('json5')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // test: 文件匹配规则  
            // use：使用loader去处理匹配文件 
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // 使用 Asset Modules 处理图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            // 使用 Asset Modules 处理字体文件
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            // 使用csv-loader
            {
                test: /\.(csv|tsv)$/i,
                use:['csv-loader']
            },
            // 使用xml-loader
            {
                test: /\.xml$/i,
                use:['xml-loader']
            },
            // 自定义parser(词法分析器) 可以将任何的toml，yaml或者json5文件作为json模块导入
            {
                test: /\.toml$/i,
                type:'json',
                parser:{
                    parse:toml.parse
                }
            },
            {
                test: /\.yaml$/i,
                type:'json',
                parser:{
                    parse:yaml.parse
                }
            },
            {
                test: /\.json5$/i,
                type:'json',
                parser:{
                    parse:json5.parse
                }
            },
        ]
    }
}