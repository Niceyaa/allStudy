// 开发环境和生产环境公用的配置
import { defineConfig } from "vite";
import postcssPresetEnv from 'postcss-preset-env'
const path = require('path')
import aliasPlugin from "./src/plugins/aliasPlugin";
export default defineConfig({
    // resolve: {
    //     alias: { // 配置目录别名
    //         '@': path.resolve(__dirname, './src'),
    //         "@assets": path.resolve(__dirname, './src/assets')
    //     }
    // },
    optimizeDeps: {
        // exclude: ['lodash-es'] // 在进行依赖预构建的时候，将 lodash-es 排除在外
    },
    envPrefix: 'VITE_', // 用于配置环境变量中变量声明的前缀，默认就是 VITE_
    css: { // 对 css 的行为进行配置
        // modules 配置对象最终会全部丢给 postcss 去处理
        modules: { // 对 css 模块化的默认行为进行覆盖
            localsConvention: 'dashesOnly', // 修改生成的配置对象的key的展示形式（驼峰或者中划线）
            scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化
            // generateScopedName: '[name]_[local]_[hash:5]', // 修改生成的配置对象的value的命名规则
            generateScopedName: (name, filename, css) => {
                // console.log(11, path.resolve(__dirname, './components/A/a.module.css'))
                // name 类名 filename 文件的绝对路径 css 类名的详细css
                return `${name}_${Math.random().toString(32).substring(3,8)}`
            },
            hashPrefix: 'hello', // 生成hash 会根据类名 + 一些随机字符串(文件名 + 它内部的随机生成的一个字符串)去生成hash，加上prefix之后就相当于在随机字符串加一个前缀，生成的hash更加的不容易重复
            // globalModulePaths: [path.resolve(__dirname, './components/A/a.module.css')]
            // globalModulePaths: ['./components/A/a.module.css'], // 不进行 css 模块化的路径
        },
        preprocessorOptions: { // css 预编译语言配置
            less: { // 整个的配置对象最终都会给到less的执行参数中《全局参数》
                math: 'always',
                globalVars: { // 定义全局变量
                    mainColor: 'red'
                }
            },
        },
        devSourcemap: true, // 开启 css 的sourcemap（文件索引）
        postcss: { // 配置postcss 也可以通过在根目录下新建postcss.config.js 进行配置
            // postcss-preset-env 能够做很多css的处理工作，例如 语法降级，后缀补全等等
            plugins: [postcssPresetEnv()]
        }
    },
    build: {
        rollupOptions: { // 配置 rollup 的一些构建策略
            output: { // 控制输出
                //  hash 是根据打包文件的 名称和内容 生成的
                assetFileNames: '[hash].[name].[ext]', // 配置 静态资源 的打包之后的文件名称
            }
        },
        // 将图片大小小于 1000kb 的打包成 base64 格式，以避免额外的http请求
        assetsInlineLimit: 1024000, // 1000kb  默认为4096 即4kb
        outDir: 'dist', // 配置输出目录
        assetsDir: 'assets', // 配置输出目录的静态资源目录
    },
    plugins: [
        aliasPlugin()
    ]
})