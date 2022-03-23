// debounce function

function debouce(callback, time) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            callback()
        }, time)
    }
}

debouce( () => {
    console.log("hello world");
}, 3000)