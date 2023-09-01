console.log('proxy')
let obj = {
    name: 'zs',
    age: 12,
    setAge(age) {
        this.age = age
    }
}
const p = new Proxy(obj, {
    get(target, prop, receiver) {
        console.log('获取数据')
        return Reflect.get(target, prop, receiver)
    },
    set(target, prop, newProp, receiver) {
        console.log('receiver', receiver)
        Reflect.set(target, prop, newProp, receiver)
    }
})

p.name = 'ls'

console.log('拦截器', p, obj)