let arr = ['w', 'warrior', 'wars', "some"]

function search(arr, searchStr) {
  let str = searchStr.split("");
  let count = str[str.length - 1]
  let sString = str.slice(0, str.length - 1).join("")
  let newArr = [];
  arr.forEach((item, index) => {
  let restStr = item.split("").slice(count, item.length).length;
    if (item.indexOf(sString) !== -1 && restStr >= count){
    		newArr.push(item)
    }
  })
  return newArr;
}

console.log(search(arr, "w1"));
console.log(search(arr, "wa2"));
