'use client'; 
import React from 'react';
import './Stability.css';
import Statistics from '../Statistics/Statistics';


const Stability = () => {
  return (
    <div className="stability-container">
      <div className="Stability">
        <h2>Stabilty Pool</h2>
        <p><i className="fas fa-info-circle"></i>You have no USDM in the Stability Pool.</p>
        <p>You can earn ETH and MST rewards by depositing USDM.</p>
        <button className="deposit-button">Deposit</button>
      </div>
      

      <Statistics/>
    </div>
  );
};

export default Stability;