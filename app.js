//SELECTORS
const todoInput = document.querySelector('.todo-input');  
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EVENET LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//ADD TODO ITEM
function addTodo(event){
  //Prevent LiveServer Refresh in Console
    event.preventDefault();
  //CREATE EACH TODO ITEM DIV
    const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      //CREATE LI
      const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
      //CHECKMARK BUTTON
      const checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add("check-button");
        todoDiv.appendChild(checkButton);
      //TRASH BUTTON
      const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-button");
        todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  //CLEAR INPUT VALUE
  todoInput.value = '';
}

//DELETE OR CHECK TODO ITEM
function deleteCheck(e) {
  // console.log(e.target);
  const item = e.target;
  const todo = item.parentElement;
//the parentElement is the e.target we clicked from deleteCheck(e) that was defined in the event listener todoList.addEventListener('click', deleteCheck)
  //DELETE TODO
  if (item.classList[0] === "trash-button") {
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });//Our function waits till the transitionend completes before running its remove function
  } else if (item.classList[0] === 'check-button') {
    todo.classList.toggle('completed');
  }
}

//STUCK!!HERE!!!!!!!!!!!!!!!!!!!!!!!
//FILTER ALL CHECKED AND UNCOMPLETED
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    // This is will get rid of your error and will only run on nodes with a style property
    // Not sure why this guy wrote it this way if I were you I would 
    // get through this tutorial and start freeCodeCamp!!!
    if (todo.style != null) {
      switch (e.target.value) {
        case 'all':
          todo.style.display = 'flex'; //style undefined?
          break;
        case 'completed':
          todo.style.display = 'flex'; //style undefined?
        case 'uncompleted':
          todo.style.display = 'flex'; //style undefined?
          break;
      }
    }
  });
}
