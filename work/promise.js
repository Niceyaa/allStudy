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
        }, 3000);
    })
    p2.then(res => console.log(res)).catch(err => console.log(err))

    const p3 = new Promise((resolve,reject)=>{
        console.log('p3')
        return 'pppppp'
    })
    p3.then(res=>{
        console.log('没有resolve我会执行吗')
    }).catch(err=>{
        console.log('p3 Error',err)
    })
})()