//Array
let myArr = [0, 1, 2, 3, 4, 5];

console.log(`my array values: ${myArr}`);
console.log(typeof(myArr));

const arr = new Array(0, 1, 2);
console.log("my array: "+arr[1]);

//Array methods
arr.push(2);//add values in array
console.log(arr);

arr.pop();//remove last num from array
console.log(arr);

arr.unshift(9);//it shifts all element and added at 1st position
console.log(arr);

console.log(arr.shift());
console.log(arr);//it removes first element

console.log(arr.includes(0));//to check whether it is include or not

console.log(arr.indexOf(1));//shows the index of that number

