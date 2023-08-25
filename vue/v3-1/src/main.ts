import {createApp} from 'vue'
import App from './App.vue'

import router from "@/router";

const app = createApp(App)

// 自定义插件
import i18nPlugin from './plugins/i18n'

app.use(i18nPlugin, {
    greetings: {
        hello: 'Bonjour!'
    }
})


app.use(router).mount('#app')

