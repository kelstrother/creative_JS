//! ///////////////////////////////////////////////////
//! ///////////////////////////////////////////////////
//* ///////////// OBJECT ORIENTED PROGRAMMING /////////
//! ///////////////////////////////////////////////////
//! ///////////////////////////////////////////////////

//? HOISTING - When the javascript engine starts, there is
//?            a creation phase that already created a global
//?            object, the keyword "this", and memory is allocated to your functions.
//?            (saves your function declarations regardless of where they are declared).

// sayHi();       //! sayHi() still runs even though its envoked before the declaration.

// function sayHi() {
//    console.log("Hello");
// }

//!  ///////      SCOPE & EXECUTION ORDER    /////////

// function sayHi() {
//   const name = "Kel"; //* function scope. because "name" was declared inside the function,
//   console.log(name); //* I cannot access it anywhere except within its function
// }

//?  CALLSTACK - The term used for the execution order that javascript keeps track of.

// function sayHi() {
//    console.log(`Hello there, ${name}`);
//    changeName();
//    console.log(`sayHi() function is finished`);
// }

// function changeName() {
//    name = "Bobby";
//    console.log(`We changed it to ${name}`);
//    console.log(`changeName is finished`);
// }
// let name = "Kel"

// sayHi();

// console.log(`The code is now completed!`);

//! ///////////////////////////////////////////////////
//* ///////////// KEYWORD "THIS" //////////////////////
//! ///////////////////////////////////////////////////

//? THIS -  a pointer that refers to an object

console.log("global", this);

// function sayThis() {
//    console.log(this);
// }
// sayThis();

// const user = {
//    name: 'Keldev'
// };
// const admin = {
//    name: "admin"
// }
// function sayHi() {
//    console.log(this.name.toUpperCase());
// }

// user.hi = sayHi;
// admin.hi = sayHi;

// user.hi()
// admin.hi()

// const user = {
//    name: 'Keldev',
//    videos: ['html', 'vue', 'js', 'react'],
//    greet() {
//       console.log(`Hello there ${this.name}`);
//       //* add function inside of greet
//       const getVideos = () => {
//          console.log(`You currently have ${this.videos.length} videos.`);
//       }
//       getVideos()
//    }
// }

// user.greet()

//? ALL FUNCTIONS HAVE 3 DIFFERENT METHODS WE CAN APPLY TO THEM...

//! BIND - allows us to call a method on a function.

// const person =  {
//    firstName: 'Kel',
//    lastName: 'Strother',
//    getName() {
//       console.log(this.firstName + this.lastName);
//    }
// };

// function registerUser() {
//    // additional functionality...
//    this.getName();
// }

// const register = registerUser.bind(person);

// register()

//! CALL - 

