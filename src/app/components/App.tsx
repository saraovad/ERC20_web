'use client'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Trove from './Trove/Trove';
import Stability from './Stability/Stability';
import Home1 from './Home/Home1';
import './App.css';

function App() {
  return (
    <div>
       <header className="header">
        <div className="logo">Meridian</div>
        {/* <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Token Portal</a>
          <a href="#">Roadmap</a>
          <a href="#">Docs</a>
        </nav> */}
      </header>
    <Router>
      <div className="app-container">
     
        <nav>
          <Link to="/trove" className="tab-button">Trove</Link>
          <Link to="/stability" className="tab-button">Stability</Link>
          <Link to="/Home1" className="tab-button">Home</Link>
        </nav>
        <Routes>
          <Route path="/trove" element={<Trove />} />
          <Route path="/stability" element={<Stability />} />
          <Route path="/Home1" element={<Home1 />} />
        </Routes>
      </div>
    </Router>
  </div>);
}

export default App;
