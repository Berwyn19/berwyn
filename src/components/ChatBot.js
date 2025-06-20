import { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! Ask me anything about Berwyn!" }
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // ⏬ scroll to bottom every time messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // 1) add user message
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input })
      });

      const data = await res.json();
      const reply =
        data.response || "Sorry, I couldn't find any information about that.";

      // 2) add bot reply
      setMessages(prev => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error. Please try again later." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-5xl font-bold text-center text-purple-600 flex items-center justify-center gap-2">
        <FaRobot /> AI Assistant
      </h1>

      <div className="h-[420px] overflow-y-auto border rounded-lg p-4 bg-gray-50 mt-6 mb-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg max-w-sm text-white ${
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
          <div className="flex justify-start">
            <div className="text-sm text-gray-500 italic">
              Berwyn‑bot is typing…
            </div>
          </div>
        )}

        {/* dummy div to anchor scroll‑to‑bottom */}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center gap-4">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          placeholder="Type your message…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="px-4 py-2 text-white font-bold rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 flex items-center gap-2 disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading}
        >
          <FaPaperPlane /> Send
        </button>
      </div>
    </div>
  );
}
