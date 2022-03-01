function getString(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('helloworld')
        }, 2000);
    })
}
async function hw(){
    let str = await getString()
    console.log(str)
}
export {hw}