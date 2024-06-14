document.getElementById("addButton").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
});
