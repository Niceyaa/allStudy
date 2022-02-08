(() => {
    let str = "ABCabc"
    let repeatStr = "a"

    function getRepeatCount(str, repeatStr) {
        // let flag = str??false 
        let lowStr = str.toLowerCase()
        let lowReatStr = repeatStr.toLowerCase()
        let count = 0

        for(let i = 0;i<lowStr.length;i++){
            if(lowStr[i]===lowReatStr){
                count++
            }
        }
        return count
    }
    console.log(getRepeatCount(str,repeatStr))
})()