document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const toDoList = document.getElementById('toDoList');

  // Load tasks from local storage
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => addTaskToDOM(task.text, task.completed));

  function saveTasks() {
      const tasks = [];
      toDoList.querySelectorAll('li').forEach(listItem => {
          tasks.push({
              text: listItem.firstChild.textContent,
              completed: listItem.classList.contains('completed')
          });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function addTaskToDOM(taskText, completed = false) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = function() {
          toDoList.removeChild(listItem);
          saveTasks();
      };

      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.onclick = function() {
          listItem.classList.toggle('completed');
          saveTasks();
      };

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
          const newTaskText = prompt('Edit task', taskText);
          if (newTaskText !== null && newTaskText.trim() !== '') {
              listItem.firstChild.textContent = newTaskText.trim();
              saveTasks();
          }
      };

      if (completed) {
          listItem.classList.add('completed');
      }

      listItem.append(completeButton, editButton, removeButton);
      toDoList.append(listItem);
  }

  function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      addTaskToDOM(taskText);
      saveTasks();
      taskInput.value = '';
  }

  document.querySelector('button').addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTask();
      }
  });
});

