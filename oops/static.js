class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`${this.username} is login in the device`)
    }

    static createUserID(){
        return "12322"
    }
}

const nikhil = new User("nikhil")

// console.log(nikhil.createUserID())

class teacher extends User{
    constructor(username,mail){
        super(username)
        this.mail = mail
    }
}

const hitash = new teacher("hitash","i@phone.com")

console.log(hitash.createUserID())