// program for capitalize the first letter of each word and return the string
// input = "hey hello there" output = 'Hey Hello There'

function capitalizeFirstWord(str){
  words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

console.log(capitalizeFirstWord('hey hello there'));
