import { defineConfig } from 'vite'

import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

// 策略模式
const envConfig = {
    'serve': () => {
        console.log("开发环境")
        return Object.assign({}, viteDevConfig, viteBaseConfig)
    },
    'build': () => {
        console.log("生产环境")
        return Object.assign({}, viteProdConfig, viteBaseConfig)
    }
}


export default defineConfig(({ command }) => envConfig[command]())