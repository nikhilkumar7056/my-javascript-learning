// class User {
//     constructor(user, mail, password){
//         this.user = user;
//         this.mail = mail;
//         this.password = password;
//     }
//     encryptedPassword(){
//         return `the password is ${this.password}absd`
//     }
//     changeName(){
//         return `${this.user.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")

// console.log(chai.encryptedPassword());
// console.log(chai.changeName());

function User(userName, mail, passward){
    this.userName = userName
    this.mail = mail
    this.passward = passward
}

User.prototype.encripted = function(){
    return `${this.passward}.nikhil`
}

User.prototype.changeName = function(){
    return `${this.userName.toUpperCase()}`
}

let tea = new User("tea","tea@gmail.com","123")
console.log(tea.changeName())
console.log(tea.encripted())