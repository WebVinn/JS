var c = 300
if(true) {
    let a = 1;
    const b = 2;
    var c = 3;
    // console.log(a);
    // console.log(b);
    // console.log("Inner c =", c);

}
// console.log(c);


function one() {
    const user = "Vineet"

    function two() {
        const website = "youtube"
        console.log(user);
    }
    two();
} 
one ();


if(true) {
    const user = "Vineet"
    if(user === "Vineet"){
        const website = " youtube"
        console.log(user + website);
    }
}


console.log(addOne(3));
function addOne(num) {
    return num + 1;
}


let addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(3));  //Use this after declaration