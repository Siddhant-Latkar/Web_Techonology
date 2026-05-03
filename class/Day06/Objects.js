//Obj literals(literals means key,value pair)
let obj = {
    Name : "Harshada",
    Age : 20,
    Location : "Kolhapur",
    Email : "Kesteharshada87",
    lastLogin : true,
    latLoginDate : ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sat"],
    "FullName" : "Harshada Keste",
    mySymbol : "My key 1",
}//There are 2 types of obj and 3 declaration--1.Obj Literals  2.Constructor 3.Singlton
//when you create constructor it creates singlton obj it means itself obj
//when we create obj literals--singlton not create
//when we create constructor ---singlton create---interview que

const mySymbol = Symbol("Harshada");

const myObj2 = {
    [mySymbol] : "Harshada"
}

console.log(obj.FullName);
console.log(obj);

console.log(myObj2);
console.log(typeof(myObj2));

obj.Email = "harshadakeste87";
console.log(obj.Email);//updated value

//Object.freeze(obj);

obj.Email = "23UAM052@gmail";
console.log(obj.Email);


obj.Greeting = function(){
    console.log("Hello JS Users");
}

obj.Greeting();