//type1 :- 
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task is completed");
        resolve()
    }, 2000);
})
promiseOne.then(function(){
    console.log("Promise consumed");
})


//type2 :- 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed again");
        resolve()
    },2000)
}).then(function(){
    console.log("Promise completed again");
})


//Type3 :-
const promiseThree = new Promise (function(resolve, reject){
    setTimeout(() => {
        resolve({username:"Vineet", email:"Vineet@example.com"})
    }, 2000);
})
promiseThree.then(function(user){
    console.log(user);
})


//Type 4 :-
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({Username:"webVinn", Password:"Coding@Mern"})
        } else{
            reject('ERROR : Something went wrong')
        }
    },2000)
})
promiseFour.then(function(userDetail){
    console.log(userDetail);
    return userDetail.Username
}).then(function(userReturn){
    console.log(userReturn);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("Promise is either resolve or reject");
})


//Type 5 :-
const promiseFive = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({Username:"javaScript", Password:"123"})
        } else{
            reject('ERROR : JS went wrong')
        }
    },2000)
});
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


//Discuss more :-
async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);  
    } catch (err) {
        console.log(err);
        
    }
}
getAllUser()


//
fetch('https://jsonplaceholder.typicode.com/users')
.then((responses) => {
    return responses.json()
})
.then((data) => {
    console.log(data)
})
.catch((erro) => {
    console.log(erro);
})