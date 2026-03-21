class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(Value){
        this._password = Value
    }
}

const Nikhil = new User("Ni@khil.ai","adkds")
console.log(Nikhil.password)