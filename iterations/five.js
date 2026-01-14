const numbers = [1,2,34,32,55,6,4,2]
let result = 0;
numbers.forEach( (num) => {
    result = num + result
    // console.log(result)
})

// console.log(`the total sum of array is ${result}`);


function sum(items){
    // console.log(items);
    
}

const sum1 =  (items) =>{
    // console.log(items)
}

numbers.forEach(sum1)// give only referance of function

numbers.forEach( (items, index, arra) => {
    // console.log(`array item is ${items},on the index ${index},of  ${arra}`)
})

const language = [
    {
        languageName: "javaScript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

language.forEach( (items, arr)=>{
    // console.log(items.languageName, arr)
})

const number = [1,2,3,4,,5,6,7,8,9,10]

// const newNum = number.filter( (num) => (num % 2) === 0)
// const newNum = number.filter( (num) => {
//     return num % 2 
// })
 
const newNum = []

number.forEach((num) => {
    if(num%2 === 0){
        newNum.push(num)
    }
})

console.log(newNum);
