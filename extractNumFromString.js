//extract number from a string
(function extract(str){
    return console.log(str.split(' ').filter(item=> !isNaN(item)).map(item=>parseInt(item)))
})('India has more than 1 billion population according to 2018 report')
    
// Another example with RegEx
function extractTwo(str){
    return console.log(str.match(/\d+/g).map(item=> parseInt(item)))
}
extractTwo('Indiahasmorethan1 billion populationaccording to2018report ')
