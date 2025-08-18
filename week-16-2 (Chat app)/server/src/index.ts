import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket;
    roomId: string;
}

let allSocket: User[] = [];

wss.on("connection", (ws) => {
    console.log("Client connected to WebSocket server.");

    ws.on("error", () => {
        console.log("Something went wrong while starting the WebSocket connection.");
    });

    ws.on("message", (message) => {
        // join the room 
        const messageBody = JSON.parse(message.toString());

        if (messageBody.type == "join") {
            allSocket = [...allSocket, {
                socket: ws,
                roomId: messageBody.payload.roomId
            }];
        }

        // send a message
        if (messageBody.type == "chat") {
            let userRoom = allSocket.find((s) => s.socket == ws)?.roomId;
            if (!userRoom) return;

            allSocket.forEach((s) => {
                if (s.roomId == userRoom)
                    s.socket.send(messageBody.payload.message);
            })
        }
    });

    ws.on("close", () => {
        allSocket = allSocket.filter(s => s.socket != ws)
    });
});