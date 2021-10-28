
//^\\\\\\\\  PARAMETER
// PARAMETERS are variables in the parens of the OG function.
// doesn't matter what you call the parameter here.

//^\\\\\\\  ARGUMENTS
// ARGUMENTS are values that are passed into the function when invoked.

// //!  PARAMETER || greet(doesntMatter) 
// function greet(doesntMatter) {
//    console.log("Welcome to our website " + doesntMatter + "!")
// }

// console.log("rest of the code");

// function signUp() {
//    let name = prompt(`What is your name?`);
// //!  ARGUMENT || greet(name)
//    greet(name);
// }

// signUp();

function max(nr1 = 0, nr2 = 0){
   if(nr1 > nr2){
      return nr1;
   }else{
      return nr2;
   }
}
let inbox = max(1, 50)

console.log(inbox)