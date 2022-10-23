//document.addEventListener("DOMContentLoaded", () => {
  // your code here 
  //let x = document.querySelector("#create-task-form ");
  //console.log(x);
//});

const taskForm = document.querySelector("#create-task-form")
console.log(taskForm)
const  taskList = document.querySelector("#tasks")
taskForm.addEventListener("submit",function (e){
  e.preventDefault();

const newTask = document.querySelector("#new-task-description").value
//const taskItem = document.createElement("li")
//taskItem.innerText = newTask 
taskList.innerHTML += `<li> ${newTask}
<button data-action="delete"> x </button>
</li> `
taskForm.reset()
//taskList.appendChild(taskItem)
})

taskList.addEventListener("click",function(e){
  if (e.target.dataset.action === "delete"){
    e.target.parentElement.remove()
  }
})