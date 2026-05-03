//symbol datatype mostly used in nodejs---it is used when we giving unique id

const anotherId = Symbol("123");
console.log(anotherId);
console.log(typeof(anotherId));

const Id = 123;
console.log(Id === anotherId);

//javascript is dynamic language

//array 
const char = ['a', 'b', 'c', 'd'];
const num = [1, 2, 2, 3];
console.log(char);
console.log(num);

//objects--collection of key and value pair
const myobj = {
    fName : "JS",
    age : 20
}

console.log(myobj.fName);

//functions --
function sum(a, b){ //function declaration
    console.log("3 + 5: 8");//function definition
}

sum();//function call