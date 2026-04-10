// ==============================
// FUNCTION EXAMPLE
// ==============================

function greet() {
    console.log("Welcome to Web Technology");
}

greet();

// ==============================
// ARRAY CREATION
// ==============================

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

// ==============================
// ARRAY METHODS
// ==============================

// PUSH - Add at end
fruits.push("Orange");
console.log(fruits);

// POP - Remove from end
fruits.pop();
console.log(fruits);

// SHIFT - Remove from start
fruits.shift();
console.log(fruits);

// UNSHIFT - Add at start
fruits.unshift("Grapes");
console.log(fruits);

// LENGTH
console.log(fruits.length);

// INDEXOF
console.log(fruits.indexOf("Banana"));

// FOREACH
fruits.forEach(function(item) {
    console.log(item);
});
