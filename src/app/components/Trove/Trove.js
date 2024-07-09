'use client';

import React, { useState } from 'react';
import '../Css/common.css';
import Statistics from '../Statistics/Statistics';

function Trove() {
  const [isTroveOpen, setIsTroveOpen] = useState(false);

  const handleOpenTrove = () => {
    setIsTroveOpen(true);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Trove</h2>
        <p><i className="fas fa-info-circle"></i> You haven't borrowed any USDM yet.</p>
        <p>You can borrow USDM by opening a Trove.</p>
        <button className="button" onClick={handleOpenTrove}>Open Trove</button>
      </div>
      
      {isTroveOpen && (
        <div className="card">
          <div className="input-group">
            <h3>Collateral</h3>
            <input type="text" placeholder="0.0000 ETH" />
            <button className="button">max</button>
          </div>
          <div className="input-group">
            <h3>Borrow</h3>
            <input type="text" placeholder="0.00 USDM" />
          </div>
          <div className="trove-info">
            <p>Liquidation Reserve <span>20 USDM</span></p>
            <p>Borrowing Fee <span>0.00 USDM (0.50%)</span></p>
            <p>Total debt <span>20.00 USDM</span></p>
            <p>Collateral ratio <span>N/A</span></p>
          </div>
          <button className="button">Confirm</button>
          <button className="button" onClick={() => setIsTroveOpen(false)}>Cancel</button>
        </div>
      )}
      
      <Statistics/>

    </div> 
  );
}

export default Trove;
