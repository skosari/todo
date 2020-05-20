//Selectors - classes assigned in html tags. We use this to get the values from our index.html file
const todoInput = document.querySelector('.todo-input');  
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//EVENET LISTENERS - something to happen when you click or hover etc....
todoButton.addEventListener('click', addTodo);//when clicked run the addTodo function we create below
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
  //Prevent LiveServer Refresh in Console
    event.preventDefault();
    //console.log("hello");
  //Todo DIV  
    const todoDiv = document.createElement("div");//var todoDiv create a div
      todoDiv.classList.add("todo");//add css class "todo" to our newly created div 
    const newTodo = document.createElement("li");
      newTodo.innerText = todoInput.value;//This gets the value we enetered in the input field in index.html and assigns that value to our newly created li
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);//append the text of newTodo to todoDiv
    //CHECKMARK BUTTON
    //const checkButton = document.createElement("input");//This is what I used but the tutorial was different
    const checkButton = document.createElement("button");
      //checkButton.type = 'checkbox';//this creates a button type of checkbox in html
      //checkButton.type = '<i class = "fas fa-check"></i>';
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

//DELETE li ITEM
function deleteCheck(e) {
  console.log(e.target);
  const item = e.target;
  const todo = item.parentElement;
//the parentElement is the e.target we clicked from deleteCheck(e) that was defined in the event listener todoList.addEventListener('click', deleteCheck)
  //DELETE TODO
  if (item.classList[0] === "trash-button") {
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });//Our function waits till the transitionend completes before running its remove function
  } else if (item.classList[0] === "check-button") {
    todo.classList.toggle("completed");
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){//This returns the <option value='all or completed or uncompleted in index.html'
      
    }
  })
}

/*
function completedTodo(event){
  event.preventDefault();
  //console.log("CHECKED-BUTTON");
}*/
/*
function addGridElm(event){
//add a whole new todo list in a new grid element
  const newGridElm = document.createElement("div");
  newGridElm.classlist.add("grid-element");
}
*/
/*
  //DOM Manipulation Training
  const bckt = document.querySelector(".bckt");
  bckt.style.color = "red";
  bckt.classList.add("centerBig");

  const bckc = document.querySelector(".bckc");
  bckc.style.backgroundColor = "Blue";
  bckc.classList.add("centerBig");//Access CSS style classes
  bckc.classList.remove("centerBig");//This will toggle the centerBig in style.css off
*/
