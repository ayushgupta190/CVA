import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // App component which contains the Router
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Make sure App is the only place where Router is used */}
  </React.StrictMode>
);
