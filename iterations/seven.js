const number = [1,2,3,4,5,6,7,8,9,10]

// const newNum = number.map( (num) => num - 2)

const newNum = number.map((num) => num - 2).map((num) => num + 4).filter((num) => num >6)

console.log(newNum);
