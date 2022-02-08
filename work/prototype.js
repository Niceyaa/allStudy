console.log("原型---原型链")

class Pro{
    name = 'zs'
    age = 2
    gender = ['打篮球']
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getName(){
        console.log('name------',this.name)
    }
}

let obj = {}
let fnObj = new Pro()
console.log(obj)
console.log(fnObj)


/* 
    原型：当创建一个对象时，都会和另一个对象关联起来，另一个对象就叫做原型
    原型链：当实例对象去访问一个属性或者方法时，会首先访问自身是否定义了这个属性或者方法，没有时，会去原型上面的寻找，还是没有的话，就会沿着循环往复这个往上寻找的工作，直到null，形成原型链
*/