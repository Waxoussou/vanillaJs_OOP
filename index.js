import Task from './Task.js';
import UI from './UI.js';
import { Store } from './Store.js';

// Event: Display Tasks
document.addEventListener('DOMContentLoaded', UI.displayTasks);

// Event: Add a Task
document.querySelector('#task-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const location = document.querySelector('#location').value;
    const date = document.querySelector('#date').value;

    if (title && location && date) {
        const task = new Task(title, location, date);
        console.log(task);
        
        UI.addTaskToList(task);
        Store.addTask(task);
    }
})

// Event: Remove a task
document.querySelector('#todo-list').addEventListener('click', e => {
    UI.deleteTask(e.target)
    const task_title = e.target.parentElement.parentElement.children[0].textContent
    Store.removeTask(task_title)
})