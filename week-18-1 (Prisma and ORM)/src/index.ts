import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient({
    log: ["query"]
});

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is started at port ", PORT);
})

app.post("/user", async (req, res) => {
    const { name, age, email, phone } = req.body;

    const response = await client.user.create({
        data: {
            name: name,
            age: Number(age),
            email: email,
            phone: Number(phone),
        }
    });

    res.status(200).json({
        data: response
    })
});

app.get("/user", async (req, res) => {
    const response = await client.user.findMany({include: {todos: true}});

    res.status(200).json({
        data: response
    })
});

app.patch("/user", async (req, res) => {
    const id = req.query.id;
    const { name, age, email, phone } = req.body;

    const response = await client.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: name,
            age: Number(age),
            email: email,
            phone: Number(phone)
        }
    });

    res.status(200).json({
        data: response
    });
});

app.delete("/user", async (req, res) => {
    const id = req.query.id;

    const response = await client.user.delete({
        where: {
            id: Number(id)
        }
    });

    res.status(200).json({
        data: response
    })
});

app.post("/todo", async (req, res) => {
    const { userId } = req.query;
    const { title, description } = req.body;

    const response = await client.todo.create({
        data: {
            title: title,
            description: description,
            userId: Number(userId)
        }
    });

    res.status(200).json({
        data: response
    })
});

app.get("/todo", async (req, res) => {
    const { userId } = req.query;
    const response = await client.todo.findMany({
        where: {
            userId: Number(userId)
        }
    });

    res.status(200).json({
        data: response
    })
});

app.patch("/todo", async (req, res) => {
    const { userId, todoId } = req.query;
    const { title, description } = req.body;

    const currentTodo = await client.todo.findFirst({
        where: {
            id: Number(todoId)
        }
    })

    if (currentTodo?.userId != userId) {
        return res.status(500).json({
            message: "unauthorized"
        })
    }

    const response = await client.todo.update({
        where: {
            id: Number(todoId)
        },
        data: {
            title: title,
            description: description
        }
    });

    res.status(200).json({
        data: response
    });
});

app.delete("/todo", async (req, res) => {
    const { todoId } = req.query;

    const response = await client.todo.delete({
        where: {
            id: Number(todoId)
        }
    });

    res.status(200).json({
        data: response
    })
});

