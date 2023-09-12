const fs = require('fs')
const path = require('path')
module.exports = (options) => {
    return {
        name: 'mock-plugin',
        // configureServer 用于配置开发服务的器的钩子 
        // mock插件
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const mockStat = fs.statSync(path.resolve(process.cwd(), 'mock'))
                const isDir = mockStat.isDirectory()
                if (isDir) {
                    const mockRes = require(path.resolve(process.cwd(), 'mock/index.js'))
                    const matchItem = mockRes.find(item => item.url === req.url)
                    if (matchItem) {
                        const data = matchItem.response(req)
                        res.setHeader('Content-Type', 'application/json')
                        res.end(JSON.stringify(data))
                    } else {
                        next()
                    }
                } else {
                    next()
                }
            })
        }
    }
}