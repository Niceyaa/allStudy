let arr = [1, 2, 3, 3, 2, 1, 23, 5, 4, 54]

// 找到符合条件项就会中断后面的遍历 直接中断整个循环
let mapArr1 = arr.find(item => {
    // console.log(item)
    return item === 3
})

// 无法中断整个循环，下一个循环还是会执行,只能中断当前循环 map也是一样
let mapArr2 = arr.forEach(item => {
    // console.log(item)
    if (item === 3) return
})