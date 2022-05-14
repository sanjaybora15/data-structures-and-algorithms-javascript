// polyfill of forEach
Array.prototype.forEachPolyfill = function(callback) {
    // callback here is the callback function
    // which actual .forEach() function accepts
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // currentValue, index, array
    }
}

//Polyfill of map method
Array.prototype.mapPolyfill = function(callback) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return newArr;
}

//Polyfill of filter method
Array.prototype.newFilter = function(callback){
    let filtered = [];
    for(let i = 0; i<this.length; i++) {
        if (callback(this[i],i,this))
            filtered.push(this[i]);
        }
    return filtered;
}



let result = [1,2,3,4,5,6,7].newFilter(item => item > 2);
console.log(result);


//reduce
Array.prototype.reduceAlbums = function(callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
} // our polyfill for reduce

var logicAlbums = [
  'Bobby Tarantino',
  'The Incredible True Story',
  'Supermarket',
  'Under Pressure',
]

var combineAlbums = logicAlbums.reduceAlbums(function(a, b) {
  return a + ' , ' + b
}, 'Young Sinatra') // Initial Value is Young Sinatra

console.log(combineAlbums)
// Young Sinatra , Bobby Tarantino , The Incredible True Story , Supermarket , Under Pressure
