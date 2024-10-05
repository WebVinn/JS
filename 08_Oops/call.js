function setUserName (username) {
    this.username = username
}
function createUser (username, email, password){
    setUserName.call(this, username)

    this.email = "email",
    this.password = "password"
}
const checkCall = new createUser("Vineet", "Vineet@gmail.com", "Vineet@123")
console.log(checkCall);
