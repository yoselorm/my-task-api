let tasks = [
    // {
    //     id:0,
    //     title:"The book",
    //     createdAt: new Date(),
    //     isCompleted: false
    // }
];

const addTask = (req, res) => {

    const newTask = {
        id: tasks.length +1,
        title: req.body.title,
        createdAt: new Date(),
        isCompleted: false
    }

    tasks.push(newTask)
    res.json(newTask)
}

const getAllTasks = (req,res)=>{
    res.json(tasks);
}

const getSingleTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
}

const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex >= 0) {
        const deletedTask = tasks.splice(taskIndex, 1);
        res.json({ message: 'Task deleted successfully', deletedTask });
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
}

module.exports={addTask,getAllTasks,getSingleTask,deleteTask};