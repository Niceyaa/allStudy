(()=>{

    let line = parseInt(readline())
    let arr = []
    while(line){
        arr.push(line)
        console.log(Array.from(new Set(arr).sort((a,b)=>a-b).join('/n')))
        line = parseInt(readline())
    }
})()