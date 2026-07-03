function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    let actions = document.createElement("div");
    actions.className = "actions";

    let complete = document.createElement("button");
    complete.innerText = "✔";
    complete.className = "complete-btn";

    complete.onclick = function(){
        li.classList.toggle("completed");
    };

    let remove = document.createElement("button");
    remove.innerText = "🗑";
    remove.className = "delete-btn";

    remove.onclick = function(){
        li.remove();
    };

    actions.appendChild(complete);
    actions.appendChild(remove);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}