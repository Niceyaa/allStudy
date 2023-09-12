const fs = require('fs')
const path = require('path')
module.exports = () => {
    return {
        name: 'read-config-plugin',
        // 在解析配置后调用，使用这个钩子读取和存储最终解析的配置
        configResolved(config) {
            const ws = fs.createWriteStream(path.resolve(process.cwd(), './configResolved.js'))
            ws.write(JSON.stringify(config))
            ws.end()
                // fs.writeFile(path.resolve(process.cwd(), './configResolved.json'), JSON.stringify(config), res => {
                // })
        }
    }
}