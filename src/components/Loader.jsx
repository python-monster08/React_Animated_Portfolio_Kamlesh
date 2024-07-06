// src/components/Loader.jsx
import React from 'react';
import './Loader.css'; // Ensure this path points to your CSS file for the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader" id="loader"></div>
      <div className="loader" id="loader2"></div>
      <div className="loader" id="loader3"></div>
      <div className="loader" id="loader4"></div>
    </div>
  );
};

export default Loader;
