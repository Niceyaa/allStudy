let str = "hello world"

function getLastLen(str) {
    let type = typeof str
    if(type!=='string'|| str.length===0){
        return
    }
    let splitArr = str && str.length > 0 && str.split(" ")
    console.log('splitArr',splitArr)
    let len = splitArr[splitArr.length - 1].trim().length
    console.log('len', len)
    return len
}
getLastLen('1121 12 1   121韩！')