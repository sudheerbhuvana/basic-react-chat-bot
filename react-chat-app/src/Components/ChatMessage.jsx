import React from "react";
import userIcon from "../assets/user.png";
import robotIcon from "../assets/robot.png";

function ChatMessage({ messages }) {
    const messageEndRef = React.useRef(null);
    React.useEffect(() => {
        const containerElem = messageEndRef.current
        if (containerElem) {
            containerElem.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);
  
  return (
    <>
      {messages.map((msg,index) => (
        <div
          key={msg.id}
          className={`chat-message ${msg.sender === "user" ? "user-message" : "bot-message"}`} ref={index === messages.length - 1 ? messageEndRef : null}

        >
          <img
            src={msg.sender === "user" ? userIcon : robotIcon}
            alt={msg.sender === "user" ? "User" : "Bot"}
          />
          <p className="message-text">

            {msg.message}
          </p>
        </div>
      ))}
    </>
  );
}

export default ChatMessage;
