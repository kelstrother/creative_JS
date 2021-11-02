
// ! HTML COLLECTION
const collectionItems = document.getElementsByClassName("list-item");
const todoList = document.getElementById('todo-list')

//^ CREATE A NEW ITEM WITH JAVASCRIPT
const newItem = document.createElement('li');
newItem.classList.add('list-item');
newItem.innerText = 'study';

todoList.appendChild(newItem);
