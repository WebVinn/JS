class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    
    static createId(){
        return `xyz`;
    }
}
const userOne = new User("Vineet")
console.log(userOne);
userOne.logMe()
// console.log(userOne.createId());

class newUser extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const userTwo = new newUser("vineettt","vineet@123")
console.log(userTwo);
userOne.logMe()
// console.log(userTwo.createId());

//Note : Static does not allow to execute anything.