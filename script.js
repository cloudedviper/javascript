function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
      alert('Please enter a task.');
      return;
  }

  const toDoList = document.getElementById('toDoList');

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
      toDoList.removeChild(listItem);
  };

  listItem.append(removeButton);
  toDoList.append(listItem);

  taskInput.value = '';
}
