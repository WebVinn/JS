//ForIn loop for Object :-
const myObj = {
    name : "Vineet",
    age : 27
}
for (const Value in myObj) {
    console.log(myObj[Value]);   
}

//for printing both key and object :-
for (const Value in myObj) {
    console.log(`${Value} : ${myObj[Value]}`);   
}


//ForIn loop for Array :-
const arr = ["py", "java", "js", "css"];
for (const Value in arr) {
    console.log(arr[Value]);   
}