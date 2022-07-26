const convertRomanToInt = (str) => {
  let mapObj = {
    I: 1,
    V: 5,
    X: 10
  }
  let val = 0
  for (let i = 0; i <str.length; i++) {
    let current = mapObj[str[i]];
    let next = mapObj[str[i+1]]
    if (current < next) {
    	val = val - current
    } else {
    	val = val + current
    }
  }
  return val;
}

let result = convertRomanToInt("XII");
console.log(result)
