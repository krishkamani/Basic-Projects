// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

if(window.localStorage.getItem("New Todo") == undefined){
  var todos = [];
  window.localStorage.setItem("New Todo", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("New Todo");
var todos = JSON.parse(todosEX);


class item{
constructor(name){
 this.createItem(name);
}
 createItem(name){
   var itemBox = document.createElement('div');
     itemBox.classList.add('item');

   var input = document.createElement('input');
   input.type = "text";
   input.disabled = true;
   input.value = name;
   input.classList.add('item_input');

   var edit = document.createElement('button');
   edit.classList.add('edit');
   edit.innerHTML = "EDIT";
   edit.addEventListener('click', () => this.edit(input, name));

   var remove = document.createElement('button');
   remove.classList.add('remove');
   remove.innerHTML = "REMOVE";
   remove.addEventListener('click', () => this.remove(itemBox, name));

   todoList.appendChild(itemBox);

     itemBox.appendChild(input);
     itemBox.appendChild(edit);
     itemBox.appendChild(remove);

 }

 edit(input, name){
     if(input.disabled == true){
        input.disabled = !input.disabled;
     }
   else{
         input.disabled = !input.disabled;
         let indexof = todos.indexOf(name);
         todos[indexof] = input.value;
         window.localStorage.setItem("New Todo", JSON.stringify(todos));
     }
 }

 remove(itemBox, name){
     itemBox.parentNode.removeChild(itemBox);
     let index = todos.indexOf(name);
     todos.splice(index, 1);
     window.localStorage.setItem("New Todo", JSON.stringify(todos));
    pendingtask(todos);
 }
}

addBtn.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
if(e.which == 13){
 check();
}
})

function check(){
if(inputBox.value != ""){
 new item(inputBox.value);
     todos.push(inputBox.value);
     pendingtask(todos);
     window.localStorage.setItem("New Todo", JSON.stringify(todos));
 inputBox.value = "";
}
}


for (var v = 0 ; v < todos.length ; v++){
 new item(todos[v]);
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  var todos = [];
  window.localStorage.setItem("New Todo", JSON.stringify(todos));
  location.reload();
  pendingtask(todos);
  
}


//onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

function pendingtask(todos){
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = todos.length; //passing the array length in pendingtask
  if(todos.length > 0){ //if array length is greater than 0
        deleteAllBtn.classList.add("active"); //active the delete button
      }else{
        deleteAllBtn.classList.remove("active"); //unactive the delete button
      }
}
pendingtask(todos);

