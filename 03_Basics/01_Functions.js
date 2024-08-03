function test () {
    console.log("Iam Vineet");
}
test();


function addTwoNumb (num1,num2) {
    return num1 + num2;
}
console.log(addTwoNumb(2,3))


function check (user) {
    if (user === undefined) {
        console.log("No one is chekcing");
        return;
    }
    return `${user} is checking`
}
console.log(check("Vineet"));


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Vineet"));

//    -------------------------------------------xx---------------------------------------------

function storePrice (price) {
    return price;
}
console.log(storePrice(200))


function storeRate (...rate) {
    return rate;
}
console.log(storeRate(200,100,300,400,500))


function storeNewRate (val1,val2,...rate) {
    return rate;
}
console.log(storeNewRate(200,100,300,400,500))


//Pass Object in Function() =========>>>
const user = {
    name : "Vineet",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and Price is ${anyobject.price}`);
}
handleObject(user);
// handleObject({
//     name : "Vinnie",
//     price : 299
// })


//Pass Array in Function() =========>>>
const tryArray = [100,200,300,400]
function handleArray (anyarray) {
    return anyarray[3];
}
//console.log(handleArray(tryArray))
console.log(handleArray([100,200,300,400]))