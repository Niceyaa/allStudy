// 原生js实现继承
(() => {
    // 构造函数执行继承的时候，需要使用 Parent.call(this,arguments) 有一个弊端，无法访问 (原型对象)Parent 上面的方法
    /* function Parent(name,age) {
        this.name = name
        this.age = age
        let getParentInfo = ()=>{
            console.log(`${this.name},今年${this.age}岁了`)
        }
    }
    function Son(name,age,gender){
        Parent.call(this,name,age)
        this.gender = gender
    }
    let p = new Parent('Bob',12)
    let son = new Son('小明',18,'男')
    console.log('------构造函数继承------',p)
    console.log('------构造函数继承------',son) */

    // 原型链继承 --- 实现了构造函数的缺点，函数可以复用，函数定义在 Parent 的原型上(利用原型链)，将 Son 的原型对象指向 new Parent()，但是实例化 Son 对象的时候，无法动态传参
    /* function Parent(name,age) {
        this.name = name
        this.age = age
    }
    Parent.prototype.getParentInfo = ()=>{
        console.log(`${this.name},今年${this.age}岁了`)
    }
    function Son(name,age,gender){
        this.gender = gender
    }
    Son.prototype = new Parent('gio',19)
    Son.prototype.constuctor = Son

    const ming = new Son('ming',18,'男')
    console.log('------原型链继承------',ming) */

    // 组合继承
    /* function Parent(name,age) {
        this.name = name
        this.age = age
    }
    Parent.prototype.getParentInfo = function(){
        console.log(`${this.name},今年${this.age}岁了`)
    }
    function Son(name,age,gender){
        Parent.call(this,name,age)
        this.gender = gender
    }
    Son.prototype = new Parent()
    // Son.prototype.constructor = Son

    let bob = new Son('Bob',12,'男')
    bob.getParentInfo()
    console.log('------组合继承------',bob) */

    // 寄生组合继承
    function Parent(name,age) {
        this.name = name
        this.age = age
    }
    Parent.prototype.getParentInfo = function(){
        console.log(`${this.name},今年${this.age}岁了`)
    }
    function content(obj){
        function F(){}
        F.prototype = obj
        return new F()
    }
    let con = content(Parent.prototype)
    function Sub(name,age,gender){
        Parent.call(this,name,age)
        this.gender = gender
    }
    Sub.prototype = con
    Sub.prototype.constructor = Sub
    let ming = new Sub('小明',12,'男')
    let p = new Parent('zs',12,'男')
    console.log('p.__proto__',p.__proto__,p)
    console.log(p.__proto__===Parent.prototype)
    ming.getParentInfo()
    console.log('------寄生组合继承------',ming)


})()