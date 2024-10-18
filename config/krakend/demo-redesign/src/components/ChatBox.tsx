"use client";
import { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]); // Explicitly define the type as string[]
  const [message, setMessage] = useState("");
  const messagesDiv = useRef<HTMLDivElement | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080/chat/ws/foo");

    ws.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]); // Add new message to array
      if (messagesDiv.current) {
        messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
      }
    };

    ws.current.onopen = () => console.log("Connected");
    ws.current.onclose = () => console.log("Disconnected");

    return () => {
      if (ws.current) ws.current.close(); // Close WebSocket connection on cleanup
    };
  }, []);

  const sendMessage = () => {
    if (message && ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col text-white">
      <h2 className="text-2xl font-bold mb-4">Chat Room: foo</h2>
      <div
        ref={messagesDiv}
        className="w-full max-w-lg h-64 overflow-y-auto p-4 bg-[#1d1f21] rounded-md mb-4"
      >
        {messages.map((msg, index) => (
          <p key={index} className="mb-2 text-sm">
            {msg}
          </p>
        ))}
      </div>
      <div className="flex w-full max-w-lg">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full p-2 border border-gray-600 bg-[#1d1f21] rounded-l-md focus:outline-none focus:border-gray-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
