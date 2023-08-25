type translateType = {
    (key:string):string
}
export default {
    install: (app:any, options:any) => {
        app.config.globalProperties.$translate = (key:string) => {
            console.log('options',options)
            return key.split('.').reduce((o:any, i:any) => {
                console.log('o',o,i)
                if (o) return o[i]
            }, options)
        }
    }
}
