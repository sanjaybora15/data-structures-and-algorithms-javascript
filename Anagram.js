//Program to check given string is Anagram or not

function buildCharMap(str){
charMap = {};
for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
    charMap[char] = charMap[char]+ 1 || 1;
}
return charMap;
}

function anagrams(stringA, stringB){
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    //check the length is same or not
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return 'String length is not same, Hence not anagram';
    }
    // check all letter same exists or not
    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return 'String is not anagram';
        }
    }
    return `'${stringA}' and '${stringB}' is anagram `;
}

console.log(anagrams('fire hire','hire fire'))