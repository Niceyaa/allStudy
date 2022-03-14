/* (async() => {
   console.log(1)
   await new Promise((resolve,reject)=>{
       console.log(2)
       setTimeout(() => {
           console.log(3)
       }, 3000);
    //    reject()
    //    resolve()
       return 11
       console.log(4)
   }).then(res=>{
       console.log(5)
   })
   console.log(6)
})() */
/* process.nextTick(()=>{console.log(1)})
setImmediate(()=>{
    console.log(2)
})
console.log(3)
setTimeout(() => {
    console.log(4)
}, 10);
setTimeout(() => {
    console.log(5)
}, 1000);
setTimeout(() => {
    console.log(6)
}, 10);
console.log(7) */

/* let a;
const b = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve();
console.log('b',b)
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
}).then(() => {
  console.log('promise4');
  return 'hhhh'
});


a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log('after1');
  await a
  resolve(true);
  console.log('after2');
});

console.log('end'); */
const p = new Promise((resolve,reject)=>{
    console.log(1)
    resolve(11)
    console.log(2)
}).then(2).then(res=>{
    console.log(4,res)
})