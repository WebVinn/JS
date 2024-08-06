for (let i = 0; i <= 5; i++) {
    // console.log(i);
}


for (let i = 0; i <= 5; i++) {
    if(i ===3) {
        console.log("Am done with 3");
    }
    // console.log(i);
}


const myArr = ["Vineet", "Grv", "Rahul", "Animesh"]
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}


for (let i = 0; i < 5; i++) {
    if(i===3){
        console.log("Stop execusting 4 and 5 if we use break");
        break;
    }
    console.log(`Value of i is ${i}`);
}



for (let i = 0; i < 5; i++) {
    if(i===3){
        console.log("Skip one time and continue from next line");
        continue;
    }
    console.log(`Value of i is ${i}`);
}