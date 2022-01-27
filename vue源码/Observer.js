class Watcher{
    constructor(vm,expr,cb){
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.oldVal = this.getOldVal()
    }
    // 获取旧值
    getOldVal(){
        Dep.target = this
        return compileUtil.getVal(this.vm,this.expr)
    }
    // 更新视图的方法
    update(){
        // 获取新值 --- 当新旧值不相等时，就调用更新方法，进行更新
        const newVal = compileUtil.getVal(this.vm,this.expr)
        if(newVal!==this.oldVal){
            this.cb(newVal)
        }
    }
}

class Dep{
    constructor(){
        // 定义一个收集数据依赖的容器
        this.subs = []
    }
    // 添加数据依赖
    addSubs(watcher){
        this.subs.push(watcher)
    }
    // 通知观察器-watcher-去更新视图
    notify(){
        console.log("Dep notify 通知变化")
        this.subs.forEach(w=>w.update())
    }
}


// 劫持所有的属性
class Observer{
    constructor(data){
        this.data = data
        this.observe(this.data)
    }
    observe(data){
        if(data && typeof data === 'object' ){
            Object.keys(data).forEach(key=>{
                this.defineReactive(data,key,data[key])
            })
        }
    }
    // 对属性进行劫持
    defineReactive(obj,key,value){
        this.observe(value)
        const dep = new Dep()
        Object.defineProperty(obj,key,{
            enumerable: true,
            configurable: true,
            get(){
                // 订阅数据变化时，向Dep中添加观察者
                Dep.target && dep.addSubs(Dep.target)
                return value
            },
            set:(val)=>{
                this.observe
                if(val!==value){
                    value = val
                }
                // 通知 Dep 数据发生了变化
                dep.notify()
            }
        })
    }
}