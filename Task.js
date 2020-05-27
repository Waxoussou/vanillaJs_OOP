class Task {
    constructor(title, location, date) {
        this.title = title;
        this.location = location;
        this.date = date;
        this.created_at = new Date()
    }
}

export default Task;