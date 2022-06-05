
function deepMerge(...objects) {
    const isObj = obj => obj && typeof obj === "object";
    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach((key) => {
           const prevVal = prev[key];
           const objVal = obj[key];
           if (Array.isArray(prevVal) && Array.isArray(objVal)) {
               prev[key] = prevVal.concat(...objVal)
           } else if (isObj(prevVal) && isObj(objVal)) {
               prev[key] = deepMerge(prevVal, objVal)
           } else {
               prev[key] = objVal
           }
        })
        return prev
    })
}

const obj1 = {
    a: 1,
    b: [1,2,3],
    c: false,
    d: {
        e: 1,
        f: 1
    }
}

const obj2 = {
    a: 3,
    d: {
        g: 1,
        h: 1
    },
    b: [4,5,6],
    f: [11]
}

const obj3 = {
    x: "some val",
    y: true
}

console.log(deepMerge(obj1, obj2, obj3))