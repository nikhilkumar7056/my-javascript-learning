function createUser(userName, score){
    this.userName = userName
    this.score = score
}

createUser.prototype.increase = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)

chai.printMe()
chai.increase()