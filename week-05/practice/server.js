const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: ["http://192.168.121.13"]
}));

app.use((req, res, next) => {
    console.log("Origin:", req.headers.origin);
    next();
});

app.use(express.json());

app.use("/hello", (req, res)=> {
    res.send({hello: "hello"});
})

app.listen(4000, ()=>{
    console.log("Server is running on port ", 4000);
})