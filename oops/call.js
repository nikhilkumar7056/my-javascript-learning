function setuser(userName){
    this.userName = userName;
    console.log(userName);
}

function createUser(userName,email,passward){
    setuser.call(this, userName)
    this.email = email
    this.passward = passward
}

let chai = new createUser("chai","chai@fa.com","12423")

console.log(chai)