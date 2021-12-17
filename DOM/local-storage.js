//! LOCAL STORAGE

// localStorage.setItem('todo', 'Homework');
// localStorage.setItem('user', 'Kel');
// localStorage.setItem('todo', 'work');

//! SESSION STORAGE 

// sessionStorage.setItem("todoList", "Play Nintendo")


//!   GETTING DATA FROM STORAGE

// const user = localStorage.getItem('user');

// console.log(user)


//!   LOCAL STORAGE WITH AN ARRAY
const todoList = ['Homework', 'Poop', 'Nintendo'];

//!   LOCAL STORAGE WITH AN OBJECT
// const todoList = {
//    todo1: 'Homework',
//    todo2: 'Poop',
//    todo3: 'Nintendo'
// };

//^ CONVERTING ARRAY INFO TO STRING, AND THEN BACK INTO ARRAY
//!   JSON METHODS
// localStorage.setItem('todos', JSON.stringify(todoList));

// const retrieved = JSON.parse(localStorage.getItem("todos"));

// console.log(retrieved);