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

// console.log("global", this);

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

//! ///////////////////////////////////////////////////
//* ///////////// CONSTRUCTOR FUNCTIONS //////////////
//! ///////////////////////////////////////////////////


// function Todo(name, completed) {
//    this.name = name;
//    this.completed = completed;
//    this.getTodoName = function() {
//       console.log(this.name);
//    };
//    this.checkCompleted = function() {
//       console.log("checked");
//    };
//    this.deleteTodo = function() {
//       console.log("deleted");
//    }
// }

//* ///////////// Prototype //////////////

// function Todo(name, completed) {
//    this.name = name;
//    this.completed = completed;
// }
// Todo.prototype.getTodoName = function() {
//    console.log(this.name);
// }

// //* creates a NEW empty object that inherits the properties of constructor function.
// const todo = new Todo('Buy Eggs', false)  
// const todo2 = new Todo('Homework', false)
// todo.getTodoName()
// console.log(todo, todo2);



//* ///////////// Prototypal Inheritance //////////////

// function Enemy(life, name, level) {
//    this.life = life;
//    this.name = name;
//    this.level = level;
// }

// Enemy.prototype.getInfo = function() {
//    console.log(this.life,this.name,this.level);
// }
// Enemy.prototype.attack = function() {
//    console.log(`${this.name} has attacked!`);
// }
// Enemy.prototype.block = function() {
//    console.log(`${this.name} has blocked.`);
// }

// function Dragon(life, name, level, color, spell) {
//    //use the call method to attach the "this" keyword to Dragon object
//    Enemy.call(this, life, name, level)
//    this.color = color;
//    this.spell = spell;
// }

// //INHERIT PROTOTYPE
// Dragon.prototype = Object.create(Enemy.prototype)

// Dragon.prototype.fireBreath = function() {
//    console.log("BREATH OF FIRE!");
// }



// const newDragon = new Dragon(100, "drogaun", 1000, 'purple', 'fire breath')

// console.log(newDragon);
// newDragon.getInfo();

//! ///////////////////////////////////////////////////
//* ///////////// CLASSES IN OOP //////////////
//! ///////////////////////////////////////////////////

// class Enemy {
//    constructor(name, level, life) {
//       this.name = name;
//       this.level = level;
//       this.life = life;
//    }
//    getInfo() {
//       console.log(this.name, this.level, this.life);
//    }
// }

// const turtle = new Enemy("Leonardo", 500, 85);
// const wizard = new Enemy("Harry", 2250, 95);
// console.log(turtle);
// console.log(wizard);

// //! GETTING ACCESS TO THE PROPERTIES FROM ENEMY VIA "EXTENDS"
// class Bug extends Enemy {
//    constructor(name, level, life, legs, damage) {
//       super(name, level, life)
//       this.legs = legs;
//       this.damage = damage;
//    }
// }

// const theo = new Bug("Theo", 900, 90, 10, 6);

// console.log(theo);
// theo.getInfo()

//! ///////////////////////////////////////////////////
//* ///////////// FUN THINGS IN OOP ///////////////////
//! ///////////////////////////////////////////////////

// class Animator {
//    constructor(selector) {
//       this.selector = document.querySelector(selector)
//    }
//    fadeOut(time) {
//       this.selector.style.transition = `all ${time}s`;
//       this.selector.style.opacity = 1;
//    }
// }

// const intro = new Animator(".uhhuh")

// intro.fadeOut(1);