const user = {
    name : "Vineet",
    email: "vineet@fb",
    isAvailable : true,

    orderBook : function(){
        console.log('Code is breaking');
    }
}
const userOne = Object.getOwnPropertyDescriptor(user, 'name')
console.log(userOne);


Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user, 'name'));

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
//Yaha pr value tabhi print hogi jab defineproperty m value true ho

for (let [key, value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}