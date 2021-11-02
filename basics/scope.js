// //?\\\\\\\\\\\\\\\\\\\\\\\ GLOBAL SCOPE \\\\\\\\\\\\\\\\\\\\\\\\\\\\
//^ GLOBAL VARIABLES can be used everywhere in the global scope (function scope, block scope, global scope)
//! FUNCTION AND BLOCK SCOPE VARIABLES can only be used within their own scope
// let food = `apple`;
// let count = 5;
// var x = 55;

function store() {

}
// function store(){
// //*\\\\\\\\\\\\\\\  FUNCTION SCOPE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//    let food = 'banana';
//    let count = 50;
//    var x = 10
//    console.log(food, count) 
// //*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// }
// store()

// //~\\\\\\\\\\\\  BLOCK SCOPE  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// for (var x = 0; x < 10; x++){
//    console.log('block scope', x)
// }
// console.log('global x', x)
// //?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\