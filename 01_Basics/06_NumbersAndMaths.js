const num1 = 100;
// console.log(num1);

const num2 = new Number(100);
// console.log(num2);
// console.log(num2.toString().length);
// console.log(num2.toFixed(1));

const num3 = 123.8966
// console.log(num3.toPrecision(4));

const num4 = 1000000
// console.log(num4.toLocaleString('en-IN'));


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Maths xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10) + 1); //This will never give result of zero number.
// console.log(Math.floor(Math.random()*10) + 1);

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
