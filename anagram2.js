// Anagram using sort method

function anagram(stringA, StringB){
    return cleanStr(stringA) == cleanStr(StringB)
}

function cleanStr(str){
    const angd = str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    console.log(angd)
return angd
    
}
console.log(anagram('i love my india','aidni i love ym '))