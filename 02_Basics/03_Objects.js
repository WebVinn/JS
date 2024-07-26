// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Vineet",
    "full name": "Vineet Suryawanshi",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "vineet@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vineet@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "vineet@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());