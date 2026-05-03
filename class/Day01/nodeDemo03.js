var a = 10;
let ab = 20;

{
    var a = 200;
    let ab = 300;
}

console.log(a);
console.log(ab);

//The output changes because var is function-scoped and ignores block scope, so redeclaring it inside {} updates the same variable.
//let is block-scoped, so redeclaring it inside {} creates a new variable limited to that block, leaving the outer variable unchanged.