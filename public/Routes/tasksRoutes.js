const express = require("express")
const { addTask, getAllTasks, getSingleTask, deleteTask } = require("../Controllers/tasksController")



const taskRouter = express.Router()

taskRouter.post("/add",addTask)
taskRouter.get("/get-all",getAllTasks)
taskRouter.get("/get/:id", getSingleTask);
taskRouter.delete("/delete/:id", deleteTask);

module.exports = {taskRouter};