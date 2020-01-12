//program to check the input is Array or not
const is_array = (inp) => {
    if(toString.call(inp)==="[object Array]"){
        console.log(true)
    }else{
        console.log(false)
    }
}
is_array([1,2,3,4])
is_array('sanjay')

//program to check the input is string or not
const is_string = (inp) => {
    if(toString.call(inp)==="[object String]"){
        console.log(true)
    }else{
        console.log(false)
    }
}
is_string([1,2,3,4])
is_string('sanjay')