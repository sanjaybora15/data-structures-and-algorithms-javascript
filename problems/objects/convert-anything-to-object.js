function ConvertObject(inp){
    for(let key in inp){
       if(typeof inp[key] == "function"){
        inp[key] = inp[key].call(inp);
      }
      else if(typeof inp[key] == "object"){
        inp[key] = ConvertObject(inp[key]);
      }
    }
    
  return inp;
}

let inp = {
  a: 1,
  b: () => 2,
  c: "OMG!! This is working",
  d: [1,2,3,4],
  e: null,
  f: {
    a: 1,
    b: [99,98,97],
    c: {a: 1, b: 2},
    d: function(){
      return 2;
    }
  }
}

console.log(ConvertObject(inp));
