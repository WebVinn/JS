//Object literals :----

const user = {
    username : "Vineet",
    logginCount : 8,
    signedIn : true,

    getUserDetail : function () {
        // console.log("Got user detail from Database");
        console.log(`Username : ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetail());


//Constructor Function :---
function person (nickName, logginHours, isActive){
    this.nickName = nickName;
    this.logginHours = logginHours;
    this.isActive = isActive;
}
const userOne = new person("Vineet", 3, true)
const userTwo = new person("Rahul", 6, false)
console.log(userOne);
console.log(userTwo);