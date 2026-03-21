class User{
    constructor(userName){
        this.userName = userName
    }
    LogMe(){
        console.log(`${this.userName}`)
    }
}

class Teacher extends User {
    constructor(userName,mail,password){
        super(userName)
        this.mail = mail
        this.passward = password
    }
    addCourse(){
        console.log(`${this.userName} teach javascript`)
    }
}

const chai = new Teacher("chai","chai@nikhil.com","132")

chai.addCourse()
console.log(chai)