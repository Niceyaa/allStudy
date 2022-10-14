var name = '小王', age = 18
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function (fm, t) {
        console.log(`${this.name}年龄${this.age}来自${fm}去往${t}`)
    }
}
var dm = {
    name: '德玛',
    age: 20
}
console.log('objAge', obj.objAge)
// obj.myFun()

// obj.myFun.call(dm,'成都','上海')
// obj.myFun.apply(dm,['成都','上海'])
// obj.myFun.bind(dm,'成都','上海')()

// 自己封装方法
Function.prototype.myApply = function (context = window) {
    context.fn = this
    let res
    if (arguments[1]) {
        res = context.fn(...arguments[1])
    } else {
        res = context.fn()
    }
    console.log('context', arguments)
    delete context.fn
    console.log('context', context)
    return res
}
obj.myFun.myApply(dm, ['cd', 'ssh'])

Function.prototype.myCall = function (context = window) {
    context.fn = this
    let args = [...arguments].slice(1)
    return context.fn(...args)
}

obj.myFun.myCall(dm, 'cd1', 'ssh1')

// obj.myFun.bind(dm,'成都','上海')()
Function.prototype.myBind = function (context = window) {
    context.fn = this
    let curArgs = [...arguments].slice(1)
    let dd = function(){
        context.fn(...curArgs)
    }
    return dd
}
obj.myFun.myBind(dm,'bind成都','bind上海')()
