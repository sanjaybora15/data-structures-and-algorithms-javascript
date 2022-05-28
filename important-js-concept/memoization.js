const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
);

console.log(factorial(5));	// calculated
console.log(factorial(6));	// calculated for 6 and cached for 5


//Fibonacci
//normal using loop
/* var fibo = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};


console.log(fibo(9)) */

//using memoization
function fib(n, res = [0, 1, 1]) {
    if (res[n]) {
    console.log("call from cache")
        return res[n];
    }
		console.log('call from out')
    res[n] = fib(n - 1, res) + fib(n - 2, res);
    return res[n];
}

console.log(fib(10));
