class Observer{
    constructor(data){
        this.data = data
        this.observe(this.data)
    }
    observe(data){
        if(data && typeof data === 'object' ){
            Object.keys(data).forEach(key=>{
                console.log("key",key)
                this.setDefineProperty(data,key,data[key])
            })
            console.log(this.data)
        }
    }
    // 对属性进行劫持
    setDefineProperty(data,key,value){
        this.observe(value)
    }
}