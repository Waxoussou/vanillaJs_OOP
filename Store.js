export class Store {
    static getTasks() {
        const tasks = !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks'))
        return tasks
    }

    static addTask(task) {
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(task_title) {
        const tasks = Store.getTasks();
        const newTasksList = tasks.filter(x => x.title !== task_title);
        localStorage.setItem('tasks', JSON.stringify(newTasksList))
    }
};
