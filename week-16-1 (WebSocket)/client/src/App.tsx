import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const requestMessage = useRef<HTMLInputElement>(null);
  const [responseMessage, setResponseMessage] = useState<string>("");

  useEffect(() => {
    const wss = new WebSocket("ws://localhost:8080");
    setSocket(wss);

    wss.onmessage = (e) => {
      console.log(e.data);
      setResponseMessage(e.data);
    }

    return () => {
      wss.close();
    }
  }, []);

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (socket && requestMessage.current) {
      console.log("button pressed.", requestMessage.current.value);
      socket.send(requestMessage.current.value);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-400 p-4 rounded h-[300px] w-[400px] flex flex-col gap-2">
        <div className="flex-1 border border-white rounded p-4 flex gap-2">
          <div className="h-8 w-8 bg-black rounded-full"></div><p>{responseMessage ? responseMessage : "......"}</p>
        </div>
        <div className="bg-black text-white rounded-full flex justify-between">
          <input type="text" placeholder="type your message here..." className="px-6 outline-none" ref={requestMessage}></input>
          <button className="bg-white text-black px-6 py-2 rounded-full" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default App
