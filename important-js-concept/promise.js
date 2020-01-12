// Simple promise implementation

let promiseCreator = new Promise((resolve,reject)=>{
    let isClean = true
    if(isClean){
        resolve('cleaned')
    }else{
        reject('not cleaned')
    }
})

promiseCreator.then((resolved)=>{
    console.log('The room is - '+ resolved)
}).catch((rejected)=> {
    console.log('The room is :'+ rejected)
})

//-------------------------

const promise1 = new Promise((res,rej)=> {
    res('first promise done')
})
const promise2 = new Promise((res,rej)=> {
    res('second promise done')
})
const promise3 = new Promise((res,rej)=> {
    res('third promise done')
})

Promise.all([
    promise1,
    promise2,
    promise3
]).then(messages => {
    console.log(messages)
})
// Promise.race([
//     promise1,
//     promise2,
//     promise3
// ]).then(messages => {
//     console.log(messages)
// })