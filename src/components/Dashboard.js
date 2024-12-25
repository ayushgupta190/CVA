// src/components/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat'; // Import Chat component
import './Dashboard.css';

const Dashboard = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="dashboard-container">
      <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />
      {activeChat && <Chat activeChat={activeChat} />} {/* Render Chat only if a chat is active */}
    </div>
  );
};

export default Dashboard;
