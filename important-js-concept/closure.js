
function one(x){
    return function(y){
        return function(z){
            console.log(x+y+z)
        }
    }
}
const myFunction = one(10)
const myfn2 = myFunction(20)
myfn2(30)

// With for loop

for(var i =0;i<5;i++){
    ((i)=> {
        setTimeout(()=> {
            console.log(i)
        },1000)
    })(i)
}