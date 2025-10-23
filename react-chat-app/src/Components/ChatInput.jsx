import React, { useState } from "react";

function ChatInput({ onSendMessage }) {


    const [input, setInput] = useState("");

    function SendMessage(event) {
        event.preventDefault();
        if (input.trim()) {
            console.log(`Message sent! ${input}`);
            onSendMessage(input, "user");
            setInput("");
        }
    }

    return (
        <div className="chat-input">
            <input type="text" 
            placeholder="Type your message..." 
            size="50"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={SendMessage}>Send</button>
        </div>
    );
}

export default ChatInput;
