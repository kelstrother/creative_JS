//!   SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//?   EVENT LISTENERS

todoButton.addEventListener('click', addTodo);

//^   FUNCTIONS

function addTodo(e) {
   // prevent form from refreshing
   e.preventDefault();
   // TODO DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   // CREATE LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   // APPENDING THE NEW LIST ITEM TO THE DIV
   todoDiv.appendChild(newTodo);
   // ADDING COMPLETED BUTTON
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add('completed-btn');
   todoDiv.appendChild(completedButton);
   // ADDING DELETE BUTTON
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);
   // APPEND GENERATED HTML TO ORIGINAL LIST
   todoList.appendChild(todoDiv);
   todoInput.value = "";
}