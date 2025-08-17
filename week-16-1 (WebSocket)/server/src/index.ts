import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", (ws) => {
    console.log("websocket is running");

    ws.on("message", (e) => {
        if (e.toLocaleString() == "ping") {
            ws.send("pong");
        }
    })

    ws.send("hello");
});