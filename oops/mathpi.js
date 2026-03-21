const descriotor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriotor)
// console.log(Math.PI);

const chai = {
    name: "mashla Chai",
    price: 230,
    isAvailable: true,
    order: function(){
        console.log("chai is not ready")
    }
}



Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})
// const pro = Object.getOwnPropertyDescriptor(chai, "name")
// console.log(pro)

for (const [key,Value] of Object.entries(chai)) {
    if (typeof Value != 'function') {
        
        console.log(`${key} : ${Value}`)
    }
    
}