// 1.) Create a middleware function that logs each incoming 
// request’s HTTP method, URL, and timestamp to the console

// 2.) Create a middleware that counts total number of requests sent to a server. 
// Also create an endpoint that exposes it

const express = require("express");
const app = express();

let requests = 0;

app.use((req, res, next)=>{
    requests++;
    next();
})

app.use("/requests", (req, res) => {
    res.send({requests});
})

app.use("/", (req, res, next)=> {
    console.log("HTTP Methods-> ", req.method);
    console.log("URL-> ", req.url);
    console.log("Timestamp-> ", new Date().toLocaleString());
    res.send("hello");
    next();
});


app.listen(2000,()=> {
    console.log("Server is running on port: ", 2000);
});