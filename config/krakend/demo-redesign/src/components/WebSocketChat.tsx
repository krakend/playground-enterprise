"use client";
import React, { useState, useRef } from "react";

const WebSocketChat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [room, setRoom] = useState<string>(""); // Empty default room
  const [isConnected, setIsConnected] = useState<boolean>(false); // Track connection status
  const [error, setError] = useState<string | null>(null); // Track connection error
  const socketRef = useRef<WebSocket | null>(null);

  const connectWebSocket = () => {
    if (!room.trim()) {
      setError("Room name cannot be empty");
      return;
    }

    // Reset error and connection status
    setError(null);
    setIsConnected(false);

    // Close any previous connection if open
    if (socketRef.current) {
      socketRef.current.close();
    }

    const wsUrl = `ws://localhost:8080/chat/ws/${room}`;
    socketRef.current = new WebSocket(wsUrl);

    socketRef.current.onopen = () => {
      setIsConnected(true);
      console.log(`Connected to room: ${room}`);
    };

    socketRef.current.onerror = () => {
      setError("Failed to connect to WebSocket. Please try again.");
      console.log(`Connection error in room: ${room}`);
    };

    socketRef.current.onclose = () => {
      setIsConnected(false);
      console.log(`Disconnected from room: ${room}`);
    };

    socketRef.current.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };
  };

  const sendMessage = () => {
    if (socketRef.current && message.trim() !== "") {
      socketRef.current.send(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col text-white my-10">
      {/* Room input and connection button */}
      <div className="p-6 bg-[#1d1f21] rounded-md shadow-lg">
        <div className="">
          <div className="flex items-center justify-between">
            <label className="text-sm">
              localhost:8080/chat/ws/
              <input
                placeholder="create meeting"
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="ml-2 px-2 py-1 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <button onClick={connectWebSocket} className="button--primary">
              Connect
            </button>
          </div>
          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {/* Connection status */}
          {isConnected && (
            <p className="text-green-500 text-sm mb-2">
              Connected to room: {room}
            </p>
          )}
        </div>

        {/* Show chat box only if WebSocket connection is established */}
        {isConnected && (
          <>
            <div>
              <div className="h-64 bg-black p-4 rounded-lg overflow-y-auto mb-4">
                {messages.length === 0 ? (
                  <p className="text-gray-400">No messages yet...</p>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className="p-2 mb-2 bg-[#1d1f21] rounded-md"
                    >
                      {msg}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow px-4 py-2 mr-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WebSocketChat;
