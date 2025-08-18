import { useEffect, useRef, useState } from "react";

function App() {
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);
  const [message, setMessages] = useState<string[]>(["hello", "hi"]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const wss = new WebSocket("ws://localhost:8080");

    setWebsocket(wss);

    wss.onopen = (() => {
      console.log("Websocket connection is started.");

      // custom way to join room 123
      wss.send(JSON.stringify({
        "type": "join",
        "payload": {
          "roomId": "123"
        }
      }));
    })

    wss.onclose = (() => {
      console.log("Websocket connection is closed.");
    })

    wss.onmessage = ((message) => {
      const data = message.data;

      setMessages(m => [...m, data]);
    })

    return () => wss.close();
  }, []);

  // send custom message
  const sendMessage = () => {
    if (inputRef.current == null) return;

    const messagePayload = JSON.stringify({
      "type": "chat",
      "payload": {
        "message": inputRef.current.value
      }
    });

    websocket?.send(messagePayload);
    inputRef.current.value = "";
  }

  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="w-5/12 h-7/12 border border-green-600 rounded text-white flex flex-col">
        <div className="m-4 flex-1">
          <h2 className="font-medium text-lg">Responses...</h2>

          <div className="my-2 flex flex-col gap-2">
            {
              message.map((m, index) => <p className="bg-green-500 text-black px-3 rounded-full inline-block w-fit" key={index}>{m}</p>)
            }
          </div>
        </div>
        <div className="bg-gray-800 flex">
          <input type="text" placeholder="enter your message here.." ref={inputRef} className="outline-none px-6 w-full"></input>
          <button className="bg-green-600 px-6 py-2 rounded-full" onClick={sendMessage}>send</button>
        </div>
      </div>
    </div>
  )
}

export default App
