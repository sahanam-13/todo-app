// Selecting DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    addTask(taskText); // Add task to the list
    todoInput.value = ''; // Clear input field
  }
});

// Function to add a new task to the list
function addTask(taskText) {
  // Create list item
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `
    <label class="task-checkbox">
      <input type="checkbox" class="task-complete-checkbox">
      <span class="checkmark"></span>
    </label>
    <span class="task-text">${taskText}</span>
    <span class="task-actions">
      <button type="button" class="btn btn-link edit-btn">Edit</button>
      <button type="button" class="btn btn-link delete-btn">Delete</button>
    </span>
  `;
  
  // Append list item to task list
  taskList.appendChild(li);

  // Event listener for dynamically added edit and delete buttons
  li.querySelector('.delete-btn').addEventListener('click', function() {
    li.remove(); // Remove task item from the list
  });

  // Event listener for dynamically added edit button
  li.querySelector('.edit-btn').addEventListener('click', function() {
    editTask(li); // Call edit task function
  });

  // Event listener for dynamically added checkbox
  const checkbox = li.querySelector('.task-complete-checkbox');
  checkbox.addEventListener('change', function() {
    li.classList.toggle('completed', checkbox.checked); // Toggle completed class based on checkbox state
  });
}

// Function to edit an existing task
function editTask(taskItem) {
  const taskTextElement = taskItem.querySelector('.task-text');
  const currentTaskText = taskTextElement.textContent;
  const newTaskText = prompt('Edit Task:', currentTaskText); // Prompt for new task text
  
  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskTextElement.textContent = newTaskText.trim(); // Update task text
  }
}
