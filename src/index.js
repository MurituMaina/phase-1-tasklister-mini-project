document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.getElementById("create-task-form");
  form.addEventListener("submit", formSubmit)
});

function formSubmit(event){
  event.preventDefault();
  let inputTask = document.getElementById("new-task-description");
let inputTaskList = document.createElement("li")
  inputTaskList.textContent = inputTask.value

  let outputList = document.getElementById("tasks");
  // outputList.append(inputTaskList);
  outputList.appendChild(inputTaskList);
event.target.reset()
}
