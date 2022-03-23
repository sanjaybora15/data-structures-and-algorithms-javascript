let obj = {
    address: 'Jack',
};

let myFunction = (name, city) => {
    return `Hi i am ${name} and i am from${this.address}, ${city}`
}

Function.prototype.myBind = function (obj, ...args) {
    return () => this.apply(obj, [...args])
}

let newFunction = myFunction.myBind(obj)
newFunction("")
