let obj1 = {
    num: 1,
    stu: {
        name: 'zs',
        age: 12
    },
    func:()=>{
        console.log(1111)
    }
}
let obj2 

function deepCopy(oldObj, newObj={}) {
    for (let k in oldObj) {
        let val = oldObj[k]
        if (getType(val) === 'Array') {
            newObj[k] = []
            deepCopy(val, newObj[k])
        } else if (getType(val) === 'Object') {
            newObj[k] = {}
            deepCopy(val, newObj[k])
        } else {
            newObj[k] = val
        }
    }
    return newObj
}

let obj3 = JSON.parse(JSON.stringify(obj1))  // 使用JSON.parse(JSON.stringify())进行数据的深拷贝时，函数类型拷贝不出来这是一个弊端
console.log(obj3)

obj2 = deepCopy(obj1)
console.log(obj2)
obj1.stu = 2
console.log(obj2)

function getType(val) {
    let type = Object.prototype.toString.call(val)
    return type.substring(8, type.length - 1)
}