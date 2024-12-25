import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import HomePage from './components/HomePage'; 
import GoBackButton from './components/GoBackButton'; 
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css'; 
import './components/Dashboard.css';

const App = () => {
  const [activeChat, setActiveChat] = useState(null);
  const location = useLocation(); // Get the current route

  return (
    <>
      {location.pathname !== '/dashboard' && <Navbar />} {/* Render Navbar only if not on Dashboard */}
      <div className="dashboard-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={
            <>
              <GoBackButton />
              <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />
              <div className="chat-area">
                {activeChat ? (
                  <Chat activeChat={activeChat} />
                ) : (
                  <div className="empty-chat">Select a chat to start chatting!</div>
                )}
              </div>
            </>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

// Wrap the App in Router at a higher level to allow useLocation to work
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
