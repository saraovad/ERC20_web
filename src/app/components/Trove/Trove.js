'use client';

import React, { useState } from 'react';
import './Trove.css';

function Trove() {
  const [isTroveOpen, setIsTroveOpen] = useState(false);

  const handleOpenTrove = () => {
    setIsTroveOpen(true);
  };

  return (
    <div className="trove-container">
      <div className="trove">
        <h2>Trove</h2>
        <p><i className="fas fa-info-circle"></i> You haven't borrowed any USDM yet.</p>
        <p>You can borrow USDM by opening a Trove.</p>
        <button className="open-trove-button" onClick={handleOpenTrove}>Open Trove</button>
      </div>
      
      {isTroveOpen && (
        <div className="trove-details">
          <div className="collateral">
            <h3>Collateral</h3>
            <input type="text" placeholder="0.0000 ETH" />
            <button className="max-button">max</button>
          </div>
          <div className="borrow">
            <h3>Borrow</h3>
            <input type="text" placeholder="0.00 USDM" />
          </div>
          <div className="trove-info">
            <p>Liquidation Reserve <span>20 USDM</span></p>
            <p>Borrowing Fee <span>0.00 USDM (0.50%)</span></p>
            <p>Total debt <span>20.00 USDM</span></p>
            <p>Collateral ratio <span>N/A</span></p>
          </div>
          <button className="confirm-button">Confirm</button>
          <button className="cancel-button" onClick={() => setIsTroveOpen(false)}>Cancel</button>
        </div>
      )}
      
      <div className="statistics">
        <h2>Meridian statistics</h2>
        <div className="protocol">
          <h3>Protocol</h3>
          <ul>
            <li>Borrowing Fee <span>0.50%</span></li>
            <li>TVL <span>133 ETH ($464K)</span></li>
            <li>Troves <span>25</span></li>
            <li>USDM supply <span>250K</span></li>
            <li>USDM in Stability Pool <span>245K (97.9%)</span></li>
            <li>Staked MST <span>672K</span></li>
            <li>Total Collateral Ratio <span>185.6%</span></li>
            <li>ETH Oracle Price <span>$3.48K</span></li>
            <li>MST Price <span>$0.0880</span></li>
            <li>MST Market Cap <span>$738K</span></li>
            <li>Total TVL <span>$2.12M</span></li>
            <li>Recovery Mode <span>No</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trove;
