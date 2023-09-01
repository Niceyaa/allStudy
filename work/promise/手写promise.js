const FULFILLED = 'fulfilled'
const PENDING = 'pending'
const REJECTED = 'rejected'

const resolvePromise = (promise2, x, resolve, reject) => {
    // console.log('执行resolvePromise函数', x)
    // 防止死循环
    console.log('resolvePromise函数中的x', x)
    if (promise2 === x) {
        return reject(new TypeError('循环引用报错！'))
    }
    if (x instanceof MyPromise) {
        queueMicrotask(() => {
            x.then((y) => {
                resolvePromise(promise2, y, resolve, reject)
            }, reject)
        })
    } else if (typeof x === 'object' || isFunction(x)) {
        if (x === null) {
            return resolve(x)
        }
        let then = null
        try {
            then = x.then
        } catch (e) {
            return reject(e)
        }
        if (isFunction(then)) {
            let called = false
            try {
                then.call(x, y => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if (called) return
                    called = true
                    reject(r)
                })
            } catch (e) {
                if (called) return
                reject(e)
            }
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
}

const isFunction = (prm) => {
    return typeof prm === 'function'
}

class MyPromise {
    // 共有属性
    FULFILLED_CALLBACK_LIST = [];
    REJECTED_CALLBACK_LIST = [];
    _status = PENDING;
    // 静态属性
    // static _status = PENDING
    // 私有属性
    // #_status = PENDING
    constructor(fn) {
        // 初始状态为pending
        this.status = PENDING;
        this.value = null;
        this.reason = null;
        try {
            fn(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
    }

    get status() {
        return this._status
    }

    set status(newStatus) {
        console.log('我改变了', newStatus)
        this._status = newStatus
        switch (newStatus) {
            case FULFILLED:
                {
                    this.FULFILLED_CALLBACK_LIST.forEach(cb => {
                        cb(this.value)
                    })
                    break;
                }
            case REJECTED:
                {
                    this.REJECTED_CALLBACK_LIST.forEach(cb => {
                        cb(this.reason)
                    })
                    break
                }
        }
    }

    resolve(value) {
        if (this.status === PENDING) {
            const promiseFinish = (promise, self) => {
                promise.then(value => {
                    self.value = value
                    self.status = FULFILLED
                }, reason => {
                    self.reason = reason
                    self.status = REJECTED
                })
            }
            console.log(' value instanceof MyPromise', value instanceof MyPromise, this.status)
            value instanceof MyPromise ? promiseFinish(value, this) : (this.value = value, this.status = FULFILLED)
        }
    }

    reject(reason) {
        if (this.status === PENDING) {
            this.reason = reason
            this.status = REJECTED
        }
    }

    then(onFulfilled, onRejected) {
        console.log('this.status', this.status)
        const realOnFulfilled = isFunction(onFulfilled) ? onFulfilled : v => v
        const realOnRejected = isFunction(onRejected) ? onRejected : v => {
            throw v
        }

        // console.log('realOnFulfilled', realOnFulfilled)
        // console.log('realOnRejected', realOnRejected)
        const promise2 = new MyPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                queueMicrotask(() => {
                    console.log('执行resolve微任务')
                    try {
                        const x = realOnFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            const rejectedMicrotask = () => {
                queueMicrotask(() => {
                    console.log('执行reject微任务')
                    try {
                        const x = realOnRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        console.log('报错了')
                        reject(e)
                    }
                })
            }
            switch (this.status) {
                case FULFILLED:
                    fulfilledMicrotask()
                    break
                case REJECTED:
                    rejectedMicrotask()
                    break
                case PENDING:
                    this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask)
                    this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask)
            }
        })
        return promise2
    }

    catch (onRejected) {
        return this.then(null, onRejected)
    }
}

/* 
    1.首先创建 p1 对象的时候，
        -- status1 = FULFILLED 
        -- value = 1
        -- this.FULFILLED_CALLBACK_LIST1 = 【】
        -- this.REJECTED_CALLBACK_LIST1 = 【】
    2.p1.then 的时候
        -- 打印 this.status fulfilled ===========
        -- 创建一个微任务，此时的 微任务队列：【fulfilledMicrotask()】
    3.执行第二个.then 的时候
        -- 打印 this.status2 pending ===========
        -- （需要等到前一个then返回状态之后才可以执行）
        -- this.FULFILLED_CALLBACK_LIST2 = 【fulfilledMicrotask】
        -- this.REJECTED_CALLBACK_LIST2 = 【rejectedMicrotask】
        -- 然后等到当前 promise22 对象的 status修改的时候 去调用对应的 LIST 中的方法进行遍历
    4.执行 .catch 
        -- 打印 this.status3 pending ===========
        -- （需要等到前一个then返回状态之后才可以执行）
        -- this.FULFILLED_CALLBACK_LIST3 = 【fulfilledMicrotask】
        -- this.REJECTED_CALLBACK_LIST3 = 【rejectedMicrotask】
        -- 然后等到当前 promise22 对象的 status修改的时候 去调用对应的 LIST 中的方法进行遍历
        -- 此时的 reject 就是 catch 里面的函数参数
    5.执行 微任务队列中的函数
        -- 打印 ‘执行resolve微任务’ ===========
        -- 打印 then---1 1 ===========
        -- 执行 return new MyPromise... 函数
        -- 将此时的 status1 = REJECTED reason1 = new Error('我是内部返回的信息')
        -- 执行 resolvePromise 函数 ，此时的 x = new MyPromise 对象
        -- 打印 'resolvePromise函数中的x', MyPromise对象 ===========
        -- 由于此时的 x 是 MyPromise 的实例化对象，所以会下面的微任务 
        -- x.then(y=>resolvePromise(promise2,y,resolve,reject),reject)
            >> 打印 this.status rejected ===========
            >> 创建一个微任务，此时的微任务队列 【rejectedMicrotask】
            >> 执行微任务
            >> 打印 执行reject微任务 ===========
            >> x = undefined
            >> 打印 'resolvePromise函数中的x', undefined ===========
*/
let p1 = new MyPromise((resolve, reject) => {
    resolve(1)
});
p1.then(res => {
    console.log('then---1', res)
    return new MyPromise((resolve, reject) => {
        reject(new Error('我是内部返回的信息'))
    })
}).then(res => {
    console.log('then---2', res)
}).catch(err => {
    console.log('---catch---', err)
})