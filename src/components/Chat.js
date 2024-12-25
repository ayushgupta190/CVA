// src/components/Chat.js
import React, { useState } from 'react';
import './Chat.css';
import './MicSwitch.css'; // Import the new mic switch styles

const Chat = ({ activeChat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [micOn, setMicOn] = useState(false); // State to handle microphone toggle

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'This is the bot response', sender: 'bot' }
      ]);
      setMessage('');
    }
  };

  const handleMicToggle = () => {
    setMicOn(!micOn);
    // Here you can add functionality to start/stop listening for audio input
    if (!micOn) {
      console.log("Microphone is on");
      // Start listening for audio input logic
    } else {
      console.log("Microphone is off");
      // Stop listening for audio input logic
    }
  };

  return (
    <div className="chat-area">
      {activeChat ? (
        <>
          <div className="chat-box">
            <p>Currently chatting in: {activeChat}</p>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}-message`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <div className="input-wrapper">
              {/* Microphone Switch inside the input area */}
              <div className="switch" onClick={handleMicToggle}>
                {micOn ? (
                  <div className="mic-on">🎤</div>
                ) : (
                  <div className="mic-off">❌</div>
                )}
              </div>
              <textarea
                className="chat-input"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="send-btn" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Select a chat to start chatting!</p>
      )}
    </div>
  );
};

export default Chat;
