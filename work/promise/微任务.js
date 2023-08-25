console.log(1)
setTimeout(() => {
    console.log(2)
});
let p1 = new Promise((resolve) => {
    resolve('promise')
})
p1.then(res => {
    console.log(res)
})
queueMicrotask(() => {
    console.log(3)
    queueMicrotask(() => {
        console.log(5)
    })
    console.log(6)
})

console.log(4)