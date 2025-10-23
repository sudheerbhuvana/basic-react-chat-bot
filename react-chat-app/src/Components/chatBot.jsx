import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

function ChatBot() {
  const [messages, setMessages] = useState([
    { message: "Hello! How can I assist you today?", sender: "bot", id: crypto.randomUUID() }
  ]);


  async function fetchAIResponse(userMessage) {
    try {
      const response = await fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Sorry, I couldn't process that.";
    }
  }


  const addMessage = async (newMessage, sender) => {

    const userMsg = { message: newMessage, sender, id: crypto.randomUUID() };
    setMessages(prev => [...prev, userMsg]);


    if (sender === "user") {
      const aiReply = await fetchAIResponse(newMessage);
      if (aiReply) {
        const botMsg = { message: aiReply, sender: "bot", id: crypto.randomUUID() };
        setMessages(prev => [...prev, botMsg]);
      }
    }
  };

  return (
    <div className="chat-bot">
      <h1>Welcome to chatbot!</h1>
      <ChatMessage messages={messages} />
      <ChatInput onSendMessage={addMessage} />
    </div>
  );
}

export default ChatBot;
