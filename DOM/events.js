const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list')
const items = todoList.children;
const todoNr = document.querySelector('.todo-nr b')
const mainTitle = document.querySelector('.main-title')
const nameInput = document.querySelector('.name-input')
// console.log(mainTitle)


//^ATTACHING AN EVENT LISTENER TO ELEMENT
button.addEventListener('click', function(e) {
   e.preventDefault();
   //!   CREATING THE ELEMENT 
   const newItem = document.createElement('li')

   //!   ADDING A CLASS TO THE ELEMENT
   newItem.classList.add('item');

   //!   ADDING THE TEXT TO THE ELEMENT 
   newItem.innerText = nameInput.value;
   todoList.appendChild(newItem);
   todoNr.innerText = items.length;
   //!   DELETE VALUE FROM THE INPUT AFTER SUBMIT
   nameInput.value = "";

   //! CREATE THE ELEMENT AND ATTACH LISTENER
   newItem.addEventListener('click', deleteItem)

   console.log(nameInput);
});

function deleteItem(e){
   e.stopPropagation()
   e.target.remove()
   console.log(e.target)
}

todoList.addEventListener('click', function(e) {
   todoList.classList.toggle('fade')
})

