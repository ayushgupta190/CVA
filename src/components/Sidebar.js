import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeChat, setActiveChat }) => {
  const [chats, setChats] = useState([]);
  const [chatCounter, setChatCounter] = useState(0);
  const [newChatName, setNewChatName] = useState('');
  const [editingChatIndex, setEditingChatIndex] = useState(null);
  const [chatDates, setChatDates] = useState([]); // State to store chat creation dates

  const formatDate = (date) => {
    const options = { month: 'short', year: 'numeric' }; // Options for formatting
    return date.toLocaleDateString('en-US', options); // Format to 'Oct 2023'
  };

  const addChat = () => {
    const newChatIndex = chatCounter;
    const currentDate = formatDate(new Date()); // Format the current date

    setChats([...chats, `Chat ${newChatIndex + 1}`]);
    setChatDates([...chatDates, currentDate]); // Store the formatted date of the new chat
    setChatCounter(chatCounter + 1);
    setEditingChatIndex(newChatIndex);
    setNewChatName(`Chat ${newChatIndex + 1}`);
  };

  const deleteChat = (chatToDelete) => {
    const indexToDelete = chats.indexOf(chatToDelete);
    setChats(chats.filter(chat => chat !== chatToDelete));
    setChatDates(chatDates.filter((_, index) => index !== indexToDelete)); // Remove date corresponding to the deleted chat

    if (activeChat === chatToDelete) {
      setActiveChat(null);
    }
  };

  const handleChatClick = (chat) => {
    setActiveChat(chat);
  };

  const handleSaveChatName = (index) => {
    if (newChatName.trim() !== '') {
      const updatedChats = [...chats];
      updatedChats[index] = newChatName;
      setChats(updatedChats);
      setEditingChatIndex(null);
      setNewChatName('');
    } else {
      alert('Please enter a valid chat name.');
    }
  };

  const handleEditChatName = (index) => {
    setEditingChatIndex(index);
    setNewChatName(chats[index]); // Set the current chat name to the input
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Chats</h2>
        <button className="new-chat-btn" onClick={addChat}>New Chat</button>
      </div>
      {/* Added a wrapper for the chat date */}
      <div className="chat-date-container">
        {editingChatIndex !== null && <div className="chat-date">{chatDates[editingChatIndex]}</div>}
      </div>
      <ul className="chat-list">
        {chats.map((chat, index) => (
          <li key={index} className={activeChat === chat ? 'active-chat' : ''}>
            {editingChatIndex === index ? (
              <div className="chat-item">
                <input
                  type="text"
                  value={newChatName}
                  onChange={(e) => setNewChatName(e.target.value)}
                  onBlur={() => handleSaveChatName(index)} 
                  onKeyPress={(e) => e.key === 'Enter' && handleSaveChatName(index)} 
                  autoFocus
                  className="chat-input" // Optional: Add a specific class for styling
                />
                <button className="delete-btn" onClick={() => deleteChat(chat)}>
                  <svg className="svgIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="bin-top" d="M7 4V2H17V4H22V6H2V4H7Z" fill="currentColor" />
                    <path d="M4 8H20L19 22H5L4 8Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="chat-item">
                <span className="chat-name" onClick={() => handleChatClick(chat)} onDoubleClick={() => handleEditChatName(index)}>
                  {chat}
                </span>
                <button className="delete-btn" onClick={() => deleteChat(chat)}>
                  <svg className="svgIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="bin-top" d="M7 4V2H17V4H22V6H2V4H7Z" fill="currentColor" />
                    <path d="M4 8H20L19 22H5L4 8Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
