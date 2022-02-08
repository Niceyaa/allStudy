(() => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('fail'))
            console.log('p1')
        }, 3000);
    })
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(p1)
            console.log('p2')
        }, 1000);
    })
    p2.then(res => console.log(res)).catch(err => console.log(err))
})()