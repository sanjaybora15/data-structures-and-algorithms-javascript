// Find the largest number from an array

(function largestNum(num) {
    let largeNum = 0
    for(let ch of num){
        if(ch > largeNum){
            largeNum = ch
        }
    }
    return console.log(largeNum)
})([5,6,1,4,88,9])

