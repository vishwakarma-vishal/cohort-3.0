const { error } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const data = fs.readFileSync("todos.json", "utf-8");

app.get("/todos", (req, res) => {
    res.json(JSON.parse(data));
});

app.post("/create-todo", (req, res) => {
    const { title, body } = req.body;
    const todos = JSON.parse(data); // Parse the existing JSON data
    const newTodo = { title, body }; // Create new todo object
    todos.push(newTodo); // Add new todo to the array

    fs.writeFile("todos.json", JSON.stringify(todos, null, 2), (error) => {
        console.log("error");
    });


    res.send("todo is created");
});

app.put("/todo/id", (req, res) => {
    res.send("todo is updated");
});

app.delete("/todo/id", (req, res) => {
    res.send("todo is deleted");
});

app.listen(3000, () => {
    console.log("Server is running...");
});