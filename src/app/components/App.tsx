'use client'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Trove from './Trove/Trove';
import Stability from './Stability/Stability';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/trove" className="tab-button">Trove</Link>
          <Link to="/stability" className="tab-button">Stability</Link>
        </nav>
        <Routes>
          <Route path="/trove" element={<Trove />} />
          <Route path="/stability" element={<Stability />} />
          <Route path="/" element={<Trove />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
