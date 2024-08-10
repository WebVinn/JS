const arr = ["py", "java", "js", "css"];
arr.forEach(function (Value) {
    console.log(Value);
})

//forEach usign Arrow function:-
arr.forEach( (Value) => {
    console.log(Value);
})

//Using key index and array list also :-
arr.forEach( (Value, index, arr) => {
    console.log(Value, index, arr);
})

//Multiple objects in array using forEach loop :-
const myArr = [
    {
        name : "Vineet",
        surname : "Suryawanshi"
    },
    {
        name : "Gaurav",
        surname : "Yadav"
    },
    {
        name : "Rahul",
        surname : "Suryawanshi"
    }
]
myArr.forEach( (Value) => {
    console.log(Value.name);
})

//---------------------------------------[NOTE :- forEach does not return.]-----------------------------------------------//