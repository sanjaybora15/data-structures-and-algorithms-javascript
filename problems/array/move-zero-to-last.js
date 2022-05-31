let arr = [1,0,7,0,2,3,4]

//solution 1
function moveZero(ar) {
let count = 0
	for (let item in ar) {
  	if (ar[item] !== 0) {
    	[ar[item], ar[count]] = [ar[count], ar[item]]
      count++
    }
  }
  return ar
}

//solution 2
function moveZero2(ar) {
	let zero = []
  let nonZero = []
  for (let i in ar) {
  	if (ar[i] ===0) {
    	zero.push(ar[i])
    } else {
    	nonZero.push(ar[i])
    }
  }
  return nonZero.concat(zero)
}

console.log(moveZero(arr))
console.log(moveZero2(arr))
