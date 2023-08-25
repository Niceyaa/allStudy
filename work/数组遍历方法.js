let arr = [1, 2, 3, 3, 2, 1, 23, 5, 4, 54]

let mapArr = arr.map(item => {
    return item + 1
})
console.log('map', mapArr)

// some 方法在找到匹配项之后就会退出循环
let someArr = arr.some(item => {
    console.log('111')
    return item === 3
})
console.log('some', someArr)

// every 在找到不匹配项之后就会退出循环
let everyArr = arr.every(item => {
    console.log('every')
    return item === 3
})
console.log('every', everyArr)

// find 在找到第一个符合条件的时候退出循环 同时返回值
let findVal = arr.find(item => {
    console.log('find--item', item)
    return item > 3
})
console.log('find', findVal)

// filter 过滤数组中满足条件项
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
let score = result.reduce((pre, cur) => {
    return pre + cur.score
}, 0)
console.log('score', score)

// sort方法：如果参数函数返回 1 表示
// sort((a,b)=>a-b) 升序
// sort((a,b)=>b-a) 降序
arr.sort((a, b) => a - b)
console.log('sort------', arr)

Array.prototype.mySort = mySort

function mySort(fn) {
    console.log('this', this)
}
arr.mySort(1)

// flat(a) 数据扁平化 参数 a 表示要解析的 深度 ，默认为 1 
// flat(Infinity) 展开任意深度的 数组
const arr1 = [1, 2, 3, [3, 4]]
const arr2 = [1, 2, 3, [3, [
    [
        [
            [5]
        ]
    ]
]]]
arr1.flat()
console.log('arr1', arr1.flat())
console.log('arr2', arr2.flat(Infinity))

// 数组去重
console.log('使用Set进行数组去重', [...new Set(arr)])

// forEach 退出循环
// 使用return只能退出当次循环
// 使用try catch可以退出整个循环
console.log('arr', arr)

// 这样可以退出嵌套循环 
// 个人理解：当内层出现错误时，try catch语句会一层层寻找catch语句捕获错误，这样就可以在内层出现错误时，抛出错误之后，不使用catch，使用finally，然后外层使用catch，这样就可以达到退出嵌套循环的目的
try {
    arr.forEach(item => {
        console.log('外层循环')
        try {
            arr.forEach(innerItem => {
                console.log('foreach 内层循环')
                if (innerItem === 3) {
                    throw new Error('foreach报错')
                }
            })
        } finally {
            console.log('innerError')
        }

    })
} catch (err) {
    console.log('err', err)
}