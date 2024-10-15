//New Syntax :---
class User {
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    
    get password(){
        return `${this._password}@123`
    }
    set password(value){
        this._password = value
    }
}
const userOne = new User("Vineet@fb", "Vineet")
console.log(userOne.email);
console.log(userOne.password);


//Old syntax or definePropety based getter setter
function newUser(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password}@123`
        },
        set: function(value){
            this._password = value
        }
    })

}

const newUserOne = new newUser("vineet@gmail.com", "vinnie")

console.log(newUserOne.email);
console.log(newUserOne.password);


//Object based getter setter
const newUserr = {
    _email : "Vineet@FB",
    _password : 'abc@123',


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const newUsertwo = Object.create(newUserr)
console.log(newUsertwo.email);
