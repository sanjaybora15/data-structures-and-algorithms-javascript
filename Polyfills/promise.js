const promiseFn = (some) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(some);
        }, 5000)
    })
}

//Polyfills
const allPromise = (promises) => {
    const result = []
    return new Promise((resolve, reject) => {
        promises.forEach((element, index) => {
            element.then((v) => {
                result.push(v)
                if (index === promises.length -1) {
                    resolve(result);
                }
            }).catch((err) => reject(err))
        });
    })
}

allPromise([promiseFn("one", 1000), promiseFn("two", 2000), Promise.resolve("hey")])
.then((v) => {
    console.log(v)
})