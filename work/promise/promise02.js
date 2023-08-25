// 异步函数a
const a = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('a')
            console.log('a')
        }, 1000)
    })
}

// 异步函数b
const b = function(data) {
    return new Promise(function(resolve, reject) {
        resolve(data + 'b')
        console.log('b')
    })
}

// 异步函数c
const c = function(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(data + 'c')
            console.log('c')
        }, 500)
    })
}

// 顺序执行 --- 链式调用
/* a().then(res => {
    return b(res)
}).then(res => {
    return c(res)
}) */

// 顺序执行 --- 构建队列
/* const queue = (proArr) => {
    let seq = Promise.resolve()
    proArr.forEach(p => {
        seq = seq.then(p)
    })
    return seq
} */

// 顺序执行 --- async await
// async function queue(arr) {
//     let res = null
//     for (let promise of arr) {
//         res = await promise(res)
//     }
//     console.log('res', res)
//     return res
// }
// queue([a, b, c]).then(res => {
//     console.log(res)
// })
Promise.all([a(), b(), c()]).then(res => {
    console.log(res)
})