class user{
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword () {
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const userOne = new user("Vineet", "vineet@fb", "XYZ")
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

//By using protoType function :-
function User(username,email,password){
    this.username = username,
    this.email = email,
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}
const userTwo = new User("Vinnie", "vinny@gmail.com", "123")
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());

