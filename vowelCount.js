// Write a program to count the vowels

function vowel(str){
    let count = 0;
    let vowels = 'aeiou'

    for(let i=0;i<str.length;i++){
        if(vowels.indexOf(str[i].toLowerCase()) > -1){
           count++
        }
    }
    return console.log(count)
}

vowel('The Name of the hero')