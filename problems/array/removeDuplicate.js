// Write a program to remove duplicates from array

let arr = [1,2,3,4,5,444,444,444]

function removeDuplicate(str){

    // Using pre defined Set method
    // return console.log([...new Set(str)])
    
    let newArr = []
    let length = str.length
    for(let i = 0; i<length;i++){
        if(newArr.indexOf(str[i]) === -1){
           newArr.push(str[i])
        }
    }
    return console.log(newArr)
}

removeDuplicate(arr)


//string with forEach

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return console.log( Object.keys(unique));
}

removeDups(names);
