const fs = require('fs')
const path = require('path')

function diffFileAndDir(fileArr = [], basePath) {
    const result = {
        dirs: [],
        files: []
    }
    fileArr.forEach(filename => {
        const curPath = path.resolve(basePath, filename)
        const fileStat = fs.statSync(curPath)
        if (fileStat.isDirectory()) {
            result.dirs.push(filename)
        } else if (fileStat.isFile()) {
            result.files.push(filename)
        }
    })
    return result
}

function getTotalDir() {
    const basePath = path.resolve(__dirname, '../../src')
    const allFiles = fs.readdirSync(basePath)
    const { dirs } = diffFileAndDir(allFiles, basePath)
    const resolveObj = dirs.reduce((prev, cur) => {
        prev[`@${cur}`] = path.resolve(basePath, cur)
        return prev
    }, {})
    return {
        resolve: {
            alias: resolveObj
        }
    }
}

module.exports = () => {
    return {
        name: 'alias-plugin',
        config: (config, env) => { // config 是vite特有周期，会在vite读取vite.config.js文件之前调用
            const obj = getTotalDir()
            return obj
        }
    }
}