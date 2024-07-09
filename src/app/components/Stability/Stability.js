'use client';

import React from 'react';
import '../Css/common.css';
import Statistics from '../Statistics/Statistics';

const Stability = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Stabilty Pool</h2>
        <p><i className="fas fa-info-circle"></i> You have no USDM in the Stability Pool.</p>
        <p>You can earn ETH and MST rewards by depositing USDM.</p>
        <button className="button">Deposit</button>
      </div>

      <Statistics/>
    </div>
  );
};

export default Stability;
