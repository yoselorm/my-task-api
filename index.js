const express = require("express");
const { taskRouter } = require("./public/Routes/tasksRoutes");
const app = express();


const PORT = 8000;

app.use(express.json());
app.use('/tasks',taskRouter)

app.listen(PORT,()=>{
    console.log(`This is running on port ${PORT}`);  
})