function one () {
    console.log("Print value 1");
}
one();


(function two () {
    console.log("Print value 2");
}) ();


(function three (user) {
    console.log(`${user}`);
}) ("Vineet")