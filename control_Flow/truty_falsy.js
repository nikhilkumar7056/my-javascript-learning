// there is some conditions in java script in which these condition are given in the if statement than the result is true is called truty values
// and other values are falsy values

//Some falsy values are:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truly values

// 1. when false in coloms "false", 'false' taken as a string
// 2. same when 0 writen an "0",'0
// 3. " " colons with space
//4. empty array => [], object => {}, function => function(){}

//example

// const value = []
// if(value){
//     console.log("true")
// }else{
//     console.log("false");
    
// }

// check object and array are empty

const arr = []

if (arr.length === 0) {  // arr.length give length of an array which is compare with 0, which is true
    console.log("array is empty")
}
const object = {}

if (Object.keys(object).length === 0) { //Object.keys() is used to get the keys of an object, which are give as an array. so we take object keys array and then get the length of it and compare it with the 0 if length of array is zero than condition is true and execute
    console.log("object is empty")
}

// nullish coalescing operater (??) => “The nullish coalescing operator (??) returns a default value only when the variable is null or undefined, unlike || which checks all falsy values.”

// let val = 3 ?? 4 // output is 3
let val;
// val = null ?? 4 => 4
// val = undefined ?? 5 => 5
// console.log(val)

//-------------------------------------------------------------------------------------------------------------------------------
// Ternary Operator (?:) – Interview Answer

// The ternary operator is a conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false.
// “The ternary operator is a shorthand conditional operator that returns one value if a condition is true and another if it is false.”
// Shorter and cleaner than if...else

// Useful for inline conditions

// Improves readability when logic is simple

let val1 = 100

val1 >= 80 ? console.log("value is greater than 80") : console.log("value is less than 80")