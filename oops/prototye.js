// let heros = ["thor", "spiderMan"]

// let heroPower = {
//     thor: "hammer",
//     spiderMan: "sling",
    
//     getSpiderPower: function(){
//         console.log(`spide power is ${this.spiderMan}`);
//     }
// }

// Object.prototype.Nikhil = function(){
//     console.log(`Nikhil is in all Objects`)
// }

// Array.prototype.hyNIkhl = function(){
//     console.log(`nikhil in array`)
// }

// heroPower.Nikhil();

// heros.hyNIkhl();


// const User = {
//     name: "chai",
//     email: "chai@gmail.com"
// }

// const teacher = {
//     teach: true
// }

// const teachingSupport = {
//     isAvailable: false
// }

// const TAsupport = {
//     makeAssignment: `make JS assignment`,
//     fullTime: true,
//     __proto__: teachingSupport
// }

// teacher.__proto__ = User

// //morden inheritance

// Object.setPrototypeOf(teachingSupport, teacher)

let user = "Nikhil        ";

String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`);
}

user.trueLength();

"icecream".trueLength();
"yeshika    ".trueLength();