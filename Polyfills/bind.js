let obj = {
    address: "bangalore",
};

function myFunction(name, city, pin) {
    console.log(this.address)
    return `Hi i am ${name} and i am from ${this.address}, ${city}, ${pin}`
}

Function.prototype.myBind = function (obj, ...args) {
    var func = this
    let o = obj
    return function () {
        return func.apply(o, [...args])
    }
}

let newFunction = myFunction.myBind(obj, "sanjay", "karnataka", "560016")
console.log(newFunction())
