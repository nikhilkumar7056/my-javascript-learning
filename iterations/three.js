// for of

const obj={
    name: "nikil",
    class: 10,
    roll_No : 112,
    year: 2026
}

const arr = [1,2,3,4,5,6]

for (const element of arr) {
    // console.log(element);
    
}

let greeting ="hello world!"

for (const element of greeting) {
    if(element === "l"){
        continue;
    }
    // console.log(element);
    
}

// Map key value pair

const map = new Map()

map.set('IN', "india")
map.set('USA', "united states of america")
map.set('CNA', "canada")
map.set('SL', "shri lanka")
map.set('NAP', "Napel")

// console.log(map);

for (const [key, value] of map) {
    console.log(key,':-',value);
    
    
}