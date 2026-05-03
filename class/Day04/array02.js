const superheros = ["srk", "jr. ntr", "mahesh babu"];

const a = ["aish", "alia", "shraddha K"];

superheros.push(a);
console.log(superheros);

console.log(superheros[3]);//outputs all appended array
console.log(superheros[4]);//undefined
console.log(superheros[3][2]);//in second array second element

// array concat
const arr = [1, 2, 3, 4, 5];
console.log(superheros.concat(arr));//merging is not like array direct merging instead it merge special special

const aR = [1, 2, 3, [4, 5, 6],7, 8];
console.log(aR);// as it is print

const aR1 = aR.flat(Infinity);
console.log(aR1);//print a single array

const aR2 = aR.flat(1);
console.log(aR2);

const aR3 = [1, 2, 3, [4, 5, 6],7, 8,[6,7,[4,5]]];//nested array
const aR4 = aR3.flat(1);
const aR5 = aR3.flat(Infinity);
console.log(aR4);
console.log(aR5);

//flat does not change original array it returns new array

//data splitting using this methods
console.log(Array.isArray("Harshada"));//check given value is array or not

console.log(Array.from("Harshada"));//convert an iteratable obje like string,map,set into an array

console.log(Array.from({Name:"Harshada"}));//converts itaratable
console.log(Object.keys({Name:"Harshada"}));
console.log(Object.values({Name:"Harshada" }));
console.log(Object.entries({Name:"Harshada" }));

let score01 = 100;
let score02 = 200;
let score03 = 300;
console.log(Array.of(score01, score02, score03));//converts value