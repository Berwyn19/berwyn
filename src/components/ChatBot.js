import { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! Ask me anything!" }
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const ws = useRef(null);

  const WS_URL = "wss://personal-backend-gel8.onrender.com/ws/chat";

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize WebSocket once on mount
  useEffect(() => {
    ws.current = new WebSocket(WS_URL);

    ws.current.onmessage = e => {
      const token = e.data;

      if (token === "[DONE]") {
        setLoading(false);
        return;
      }

      setMessages(prev =>
        prev.map((msg, index) =>
          index === prev.length - 1 && msg.sender === "bot"
            ? { ...msg, text: msg.text + token }
            : msg
        )
      );
    };

    ws.current.onerror = () => {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠️ Connection error. Try again later." }
      ]);
      setLoading(false);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim() || ws.current.readyState !== WebSocket.OPEN) return;

    const userMessage = { sender: "user", text: input };
    const botPlaceholder = { sender: "bot", text: "" };

    setMessages(prev => [...prev, userMessage, botPlaceholder]);
    ws.current.send(input);
    setInput("");
    setLoading(true);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-600 flex items-center justify-center gap-2 mb-4">
          <FaRobot className="text-2xl sm:text-3xl" />
          AI Assistant
        </h1>

        <div className="h-[300px] sm:h-[420px] overflow-y-auto border rounded-lg p-4 bg-gray-50 mb-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] sm:max-w-sm text-white text-sm sm:text-base ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                    : "bg-gradient-to-bl from-purple-500 to-pink-500"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start text-sm text-gray-500 italic">
              Berwyn‑bot is typing…
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Type your message…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="w-full sm:w-auto px-4 py-2 text-white font-bold rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-50"
            onClick={sendMessage}
            disabled={loading}
          >
            <FaPaperPlane /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
