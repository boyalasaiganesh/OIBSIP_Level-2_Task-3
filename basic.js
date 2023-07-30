// Store tasks in an array
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push({ name: task, completed: false });
    updateLists();
    taskInput.value = "";
  }
}

// Function to update the task lists
function updateLists() {
  const pendingList = document.getElementById("pendingList");
  const completedList = document.getElementById("completedList");

  // Clear the lists
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  // Update the lists
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.name;

    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteTask(index));

    // Check if the task is completed
    if (task.completed) {
      listItem.classList.add("completed");
      listItem.appendChild(deleteButton);
      completedList.appendChild(listItem);
    } else {
      // If the task is pending, add a checkbox to mark as complete
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => markAsCompleted(index));
      listItem.appendChild(checkbox);
      listItem.appendChild(deleteButton);
      pendingList.appendChild(listItem);
    }
  });
}

// Function to mark a task as completed
function markAsCompleted(index) {
  tasks[index].completed = true;
  updateLists();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateLists();
}

// Initial update of the lists
updateLists();
