function some(array) {
	var obj = {};
    var maxEl, highest = 1;
    for(let i in array){
        var el = array[i];
        if(obj[el] == null) {
        obj[el] = 1;
        } else {
        obj[el]++;
        }
        if(obj[el] > highest){
            maxEl = el;
            highest = obj[el];
        }
    }
    return maxEl;
   }
   
   console.log(some(["1", "a", 1, 2, 3, "a", "a"]))
