// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Define navigation hook

  const handleStartNow = () => {
    navigate('/dashboard'); // Redirect to the dashboard page
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Customer Virtual Assistant</h1>
        <h2>Get answers. Find inspiration. Be more productive.</h2>
        <p>
          Revolutionizing Customer Support: Intelligent Conversations, Human-like Assistance.
        </p>
        <div className="buttons">
          <button className="start-btn" onClick={handleStartNow}>
            Start now
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
