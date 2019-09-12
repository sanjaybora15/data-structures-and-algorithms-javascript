// write a program to count the total number of vowels in a given string
//e.g: 'hi there' ->> 3
//      'why' --> 0
// 'i love you' -->5

function vowels(str){
    let count = 0;
    const vowelsCheck = ['a','e','i','o','u'];
    for(let ch of str.toLowerCase()){
        if(vowelsCheck.includes(ch))
        count++    
    }
    return count
}
console.log(vowels('i love you'))


//using regular expression

function vowel(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}
console.log(vowel('p'))