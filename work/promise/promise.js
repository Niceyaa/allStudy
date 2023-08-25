(() => {
    /* const p1 = new Promise((resolve, reject) => {
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
    p2.then(res => console.log(res)).catch(err => console.log(err)) */

    // promise 后面没有没有调用resolve的话  then方法是不会执行的
    /*   const p3 = new Promise((resolve, reject) => {
          console.log('p3')
          return '没有resolve'
      })
      p3.then(res => {
          console.log('没有resolve我会执行吗')
      }).catch(err => {
          console.log('p3 Error', err)
      }) */

    const p4 = new Promise(resolve => {
        console.log('--- p4 ---')
        resolve('p4')
    })
    const p5 = new Promise((resolve, reject) => {
        console.log('--- p5 ---')
        reject('p51')
    })
    const p6 = new Promise(resolve => {
        console.log('--- p6 ---')
        resolve('p6')
    })

    // all 所有的都resolve或者有一个reject时，停止执行后面的promise 跳出
    // Promise.all([p4, p5, p6]).then(res => {
    //     console.log('all--', res)
    // }).catch(err => {
    //     console.log('all-err', err)
    // })

    // race 只要有一个到达了终点就会退出
    // Promise.race([p4, p5, p6]).then(res => {
    //     console.log('race--', res)
    // }).catch(err => {
    //     console.log('race--err', err)
    // })

    // allSettled 所有的都到达终点才会跳出
    Promise.allSettled([p4, p5, p6]).then(res => {
        console.log('allSettled--', res)
    }).catch(err => {
        console.log('allSettled--err', err)
    })

    // any 第一个 promise 对象 兑现时(fulfilled)退出，全部 rejected 就会走 catch 
    /* Promise.any([p4, p5, p6]).then(res => {
        console.log('any--', res)
    }).catch(err => {
        console.log('any--err', err)
    }) */

})()