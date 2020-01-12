// find the longest word from a string

function longWord(str){
    let longestWord = ""

    for(let ch of str.split(' ')){
        if(ch.length > longestWord.length){
            longestWord = ch
        }
    }
   return console.log(longestWord)
}

longWord('Spiderman is the real hero')


// With arrow function
function long2(str){
    return console.log(str.split(" ").sort((a,b)=>a.length < b.length)[0])
}

long2('Spiderman is the real hero')