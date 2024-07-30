const user = {
    username : "Vineet",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, is a Coder`);
    }
} 
user.welcomeMessage()
console.log(this);