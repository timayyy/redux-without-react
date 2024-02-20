import {compose} from "redux"

// compose is a function that takes a series of functions and creates one function that will pass a value through each of them. (returns a new function that applies each of those from first to last)

// Example

function multiplyBy2(num) {
    return num * 2;
}

function divideBy2(num) {
    return num / 2;
}

function add2(num) {
    return num + 2
}

// without compose (compose does something similar to this)
function multiplyBy2DivideBy2AndAdd2(num) {
    return add2(divideBy2(multiplyBy2(num)))
}

// with compose
const multiplyBy2DivideBy2AndAdd2WithReduxCompose = compose(add2,divideBy2,multiplyBy2)

console.log(multiplyBy2DivideBy2AndAdd2(2)) // output: 4
console.log(multiplyBy2DivideBy2AndAdd2WithReduxCompose(2)) // output: 4