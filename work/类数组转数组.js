let likeArray = {
    0:1,
    1:2,
    2:3,
    length:3
}
console.log('likeArray',likeArray)
// let newArr = Array.from(likeArray)
console.log('Array.from  转换数组',Array.from(likeArray))
console.log('Array.prototype.slice.call()  转换数组',Array.prototype.slice.call(likeArray))
// console.log('[...list]  转换数组',[...likeArray])  有问题
let newArr = Array.prototype.map.call(likeArray,(cur)=>{
    return cur
})
console.log('通过遍历 Array.prototype.map.call(likeArray,cur=>cur) 转换数组',newArr)


