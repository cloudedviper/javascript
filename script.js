document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to fully load before attaching event listeners
    let addButton = document.getElementById("addButton");
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (!addButton || !taskInput || !taskList) {
        console.error("Required elements not found.");
        return;
    }

    addButton.addEventListener("click", function() {
        let taskText = taskInput.value.trim();

        if (taskText !== "") {
            let li = document.createElement("li");
            li.textContent = taskText;

            li.addEventListener("click", function() {
                li.classList.toggle("completed");
            });

            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});



