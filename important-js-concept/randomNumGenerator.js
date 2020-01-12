
function generateProblems(max){
       for(let i =0;i<=10;i++){
           let randomNumber = generateRandom(max)
           console.log(`${randomNumber} + ${generateRandom(max-randomNumber)} = `)
       }
}

function generateRandom(max){
    return Math.ceil(Math.random()*max)
}

function generateProblems(maxNumber){
    for(let i = 0; i<=10;i++){
        let random = randomNumber(maxNumber);
        let random2 = randomNumber(maxNumber - random);
        console.log(` ${random} + ${random2} = ${random + random2} `)
    }     
}
function randomNumber(maxNumber){
        return Math.ceil(Math.random()*maxNumber)
}

generateProblems(10)