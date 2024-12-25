// src/components/GoBackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <button onClick={handleGoBack} style={{ margin: '10px', padding: '10px', backgroundColor: '#00aaff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      Go Back
    </button>
  );
};

export default GoBackButton;
