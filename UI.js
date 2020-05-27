import { Store } from './Store.js';

class UI {
    static displayTasks() {
        const tasks = Store.getTasks();
        tasks.map(task => { UI.addTaskToList(task) })
    }

    static addTaskToList(task) {
        const list = document.querySelector('#todo-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.location}</td>
        <td>${task.date}</td>
        <td>${task.at}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row);
    }

    static deleteTask(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove()
        }
    }
}

export default UI;