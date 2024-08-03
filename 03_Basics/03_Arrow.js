const user = {
    username : "Vineet",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, is a Coder`);
    }
} 
user.welcomeMessage()
user.username = "Vinnie"
user.welcomeMessage()


console.log(this);


const one = function () {
    user : "Vineet"
    console.log(this.user);
    
}
one();


const two = () => {
    user : "Vineet"
    console.log(this.user);
    
}
two();


// const twoNum = (num1,num2) => {
//     return num1+num2;
// }

// const twoNum = (num1,num2) => num1+num2;

// const twoNum = (num1,num2) => (num1+num2);

const twoNum = (num1,num2) => ({user:"Vineet"})


console.log(twoNum(2,3));