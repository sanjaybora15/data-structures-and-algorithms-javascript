//Design a function with toggle functionality for given list of inputs where toggle function accepts list of values to be toggled upon
// Example
var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello();      // "hello"
hello();      // "hello"

onOff();      // "on"
onOff();      // "off"
onOff();      // "on"

speed();      // "slow"
speed();      // "medium"
speed();      // "fast"
speed();      // "slow"


function toggle(...values){
    let state = -1;
    const length = values.length;
    return function(){
        state = (state + 1) % length;
        return values[state];
    }
}
