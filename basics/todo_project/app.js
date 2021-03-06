//!   SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//?   EVENT LISTENERS

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

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
function deleteCheck(e) {
   const item = e.target;
   // ! DELETE TODO ITEM
   if (item.classList[0] === 'trash-btn') {
      const todo = item.parentElement;
      // ANIMATION
      todo.classList.add("fall");
      todo.addEventListener('transitionend', function(){
         todo.remove();
      })
   }
   // ! COMPLETE ITEM
   if (item.classList[0] === "completed-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
   // console.log("completed")
}

function filterTodo(e) {
   const todos = todoList.childNodes;
   todos.forEach(function(todo){
      switch(e.target.value) {
         case "all":
            todo.style.display = 'flex';
            break;
            case "completed":
               if(todo.classList.contains('completed')) {
                  todo.style.display = 'flex';
               } else {
                  todo.style.display = 'none';
         }
         break;
         case "incomplete":
            if(!todo.classList.contains('completed')) {
               todo.style.display = 'flex';
            } else {
               todo.style.display = 'none';
            }
      }
   });
}