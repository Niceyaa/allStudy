module.exports = (options) => {
    return {
        name: 'html-plugin',
        // 转换 html 专用的钩子
        transformIndexHtml: {
            // 控制转换的时间顺序 pre 会在 alias 之后执行  然后再执行 vite 内部的核心插件
            enforce: 'pre',
            transform: (html, ctx) => {
                const { inject } = options
                const { data } = inject
                // console.log('html', html, data.title)
                return html.replaceAll("<%= title =>", data.title)
            }
        }
    }
}