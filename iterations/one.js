// for

for (let i = 0; i < 10; i++) {
    // const element = i;
    if (i === 5) {
        // console.log("5 is the best number");
        
    }
    // console.log(i)
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`)
        // console.log(`${i} * ${j} = ${j*i}`);
        
    }
}

// let myArray = ["flash","ironman","superman","batman","spiderman","thor","caption Marval"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`5 is detected n`);
        break//exit form loop
    }
    console.log(index);
    
    
}

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`5 is detected n`);
        continue // skip value of five
    }
    console.log(index);
    
    
}