let letterStr = `If you can keep your head when all about you 
  Are losing theirs and blaming it on you,
  If you can trust yourself when all men doubt you,
  But make allowance for their doubting too;
If you can wait and not be tired by waiting,
Or being lied about, don’t deal in lies,
Or being hated, don’t give way to hating,
And yet don’t look too good, nor talk too wise:

If you can dream — and not make dreams your master;   
If you can think — and not make thoughts your aim;   
If you can meet with Triumph and Disaster
And treat those two impostors just the same;   
If you can bear to hear the truth you’ve spoken
Twisted by knaves to make a trap for fools,
Or watch the things you gave your life to, broken,
And stoop and build ’em up with worn-out tools:

If you can make one heap of all your winnings
And risk it on one turn of pitch-and-toss,
And lose, and start again at your beginnings
And never breathe a word about your loss;
If you can force your heart and nerve and sinew
To serve your turn long after they are gone,   
And so hold on when there is nothing in you
Except the Will which says to them: ‘Hold on!’

If you can talk with crowds and keep your virtue,   
Or walk with Kings — nor lose the common touch,
If neither foes nor loving friends can hurt you,
If all men count with you, but none too much;
If you can fill the unforgiving minute
With sixty seconds’ worth of distance run,   
Yours is the Earth and everything that’s in it,   
And — which is more — you’ll be a Man, my son!`

// 获取weight最重的三个word
function getTopThree(str) {
    if (!str) {
        return
    }
    str = ClearBr(str)
    let letterArr = str.split(' ') // 以空格分隔
    letterArr = letterArr.filter(item => item.length !== 0) // 清除空字符串
    letterArr = [...new Set(letterArr)] // 去重

    let obj = letterArr.reduce((prev, cur) => {
        let lowerStr = cur.toLowerCase(cur)
        let weight = 0
        for (let i = 0; i < lowerStr.length; i++) {
            if (lowerStr[i] >= 'a' && lowerStr[i] <= 'z') {
                weight += lowerStr[i].charCodeAt() - 97 // a 的code为97
            }
        }
        prev[cur] = weight
        return prev
    }, {})

    let objArr = Object.entries(obj)
    objArr.sort(compareFn) // 根据weight从高到底排序

    let topRes = []
    let topWeight = []
    for (let i = 0; i < objArr.length; i++) {
        topRes.push(objArr[i][0])
        if (!topWeight.includes(objArr[i][1])) {
            topWeight.push(objArr[i][1])
        }
        if (topWeight.length === 3) {
            break
        }
    }
    return topRes
}

console.log('top3', getTopThree(letterStr))

// 排序函数
function compareFn(a, b) {
    return a[1] > b[1] ? -1 : 1
}
// 去除 \n 和 ，
function ClearBr(key) {
    key = key.replace(/<\/?.+?>/g, "");
    key = key.replace(/[\r\n]/g, "");
    key = key.replaceAll(',', ' ')
    return key;
}