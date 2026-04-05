"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const welcomeMessage: Message = {
  role: "assistant",
  content:
    "Bună ziua! 🌿 Sunt asistentul virtual Georgia Beauty House. Te pot ajuta cu informații despre servicii, prețuri sau programări. Cu ce te pot ajuta?",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Eroare la server");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Îmi pare rău, am întâmpinat o eroare. Te rog contactează-ne direct la +40 747 637 154.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-navy-800 text-cream-100 flex items-center justify-center shadow-xl hover:bg-navy-700 transition-all duration-300 hover:scale-105"
          aria-label="Deschide chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-cream-200 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ height: "520px" }}
      >
        {/* Header */}
        <div className="bg-navy-800 px-5 py-4 flex items-center justify-between shrink-0">
          <div>
            <p className="font-serif text-lg text-cream-100 font-semibold">
              Georgia Beauty House
            </p>
            <p className="text-xs text-cream-300/70 font-sans">Asistent virtual</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-cream-200 hover:text-white transition-colors"
            aria-label="Închide chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-sans leading-relaxed ${
                  msg.role === "user"
                    ? "bg-navy-800 text-cream-100 rounded-br-md"
                    : "bg-cream-100 text-navy-800 rounded-bl-md"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-cream-100 text-navy-800 px-4 py-3 rounded-2xl rounded-bl-md">
                <Loader2 size={16} className="animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-cream-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrie un mesaj..."
              className="flex-1 px-4 py-2.5 bg-cream-50 border border-cream-200 rounded-full text-sm font-sans text-navy-800 placeholder:text-navy-600/40 focus:outline-none focus:border-gold-accent transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-full bg-navy-800 text-cream-100 flex items-center justify-center hover:bg-navy-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              aria-label="Trimite mesaj"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
