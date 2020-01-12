
const str = 'hte hero and the name is 10 and 30 10'

let sec = str.split(" ").filter(item => !isNaN(item))

console.log(sec)