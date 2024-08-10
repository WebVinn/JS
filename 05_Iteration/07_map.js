const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// newNum = myNums.map( (num) => num + 10)

// newNum = myNums.map( (num) => {return num + 10})

//Chaining :- To use double map() and filter :- 
// newNum = myNums.map((num) => num *10).map((num) => num +1)

newNum = myNums.map((num) => num *10).map((num) => num +1).filter((num) => num >= 40)
console.log(newNum);
