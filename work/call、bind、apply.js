var name = '小王',age = 18
var obj = {
    name:'小张',
    objAge:this.age,
    myFun:function(fm,t){
        console.log(`${this.name}年龄${this.age}来自${fm}去往${t}`)
    }
}
var dm = {
    name:'德玛',
    age:20
}
console.log('objAge',obj.objAge)
// obj.myFun()

obj.myFun.call(dm,'成都','上海')
obj.myFun.apply(dm,['成都','上海'])
obj.myFun.bind(dm,'成都','上海')()