function multiplyBy5 (num){
    return num*5;
}
console.log(multiplyBy5(5));


function createUser(user, price){
    this.user = user,
    this.price = price
}
createUser.prototype.printMe = function(){
    console.log(`Price of tea is: ${this.price}`);
}
const chai = new createUser("Vineet", 10);
chai.printMe()