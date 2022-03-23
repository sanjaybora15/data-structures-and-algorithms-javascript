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
