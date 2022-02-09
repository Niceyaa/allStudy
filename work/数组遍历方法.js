let arr = [1, 2, 3, 3, 2, 1, 23, 5, 4, 54]

let mapArr = arr.map(item => {
    return item + 1
})
console.log('map', mapArr)

let someArr = arr.some(item => {
    console.log('111')
    return item === 1
})
console.log('some', someArr)

let everyArr = arr.every(item => {
    return item === 1
})
console.log('every', everyArr)

let findVal = arr.find(item => {
    console.log('find--item', item)
    return item > 3
})
console.log('find', findVal)

let filterArr = arr.filter(item => {
    return item > 3
})
console.log('filter', filterArr)

// 默认循环是从第二个元素开始
// reduce 接收两个参数  第一个cb回调（totalVal,currentVal,idx,arr），第二个初始值(可选)(初始值是赋值给totalVal的)
let sum = arr.reduce((totalVal, currentVal, idx, arr) => {
    console.log('reduce----', totalVal, currentVal, idx, arr)
    return totalVal + currentVal
}, 0)
console.log('sum', sum)
// 如果是空数组的话，使用reduce如果不指定初始值为0，那么默认从1开始就会报错
let sum2 = [].reduce((totalVal, currentVal, idx, arr) => {
    console.log('reduce--------------', totalVal, currentVal, idx, arr)
    return totalVal + currentVal
}, 0)

// 计算数组中每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let repeat = names.reduce((totalVal, currentVal) => {
    console.log('计算数组中每个元素出现的次数---totalVal---currentVal', totalVal, currentVal)
    if (currentVal in totalVal) {
        totalVal[currentVal]++
    } else {
        totalVal[currentVal] = 1
    }
    return totalVal
}, {})
console.log('计算数组中每个元素出现的次数', repeat)

// 数组去重
let noRepeat = names.reduce((pre, cur) => {
    !pre.includes(cur) ? pre.push(cur) : ''
    return pre
}, [])
console.log('noRepeat', noRepeat)

// 将多维数组转为一维数组
let dimensionsArr = [11, 2, 22, [0, 1],
    [2, 3],
    [4, [5, 6, [7, 9, 1]]]
]

function getNewArr(arr) {
    return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? getNewArr(cur) : cur), [])
}
let turnedArr = getNewArr(dimensionsArr)
console.log('转换后的数组', turnedArr)

// 对象里的属性求和
let result = [{
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];
let score = result.reduce((pre,cur)=>{
    return pre+cur.score
},0)
console.log('score',score)