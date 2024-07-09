'use client'; 
import React, {useState} from 'react';
import './Stability.css';
import Statistics from '../Statistics/Statistics';


const Stability = () => {
  const [isDeposit, setIsDeposit] = useState(false);

  const handleDeposit = () => {
    setIsDeposit(true);
  };

  return (
    <div className="stability-container">
      <div className="Stability">
        <h2>Stabilty Pool</h2>
        <p><i className="fas fa-info-circle"></i>You have no USDM in the Stability Pool.</p>
        <p>You can earn ETH and MST rewards by depositing USDM.</p>
        <button className="deposit-button" onClick={handleDeposit}>Deposit</button>
      </div>
      {isDeposit && (
        <div className="trove-details">
          <div className="deposit">
            <h3>Deposit</h3>
            <input type="text" placeholder="0.0000 ETH" />
            <button className="max-button">max</button>
          </div>
          <div className="poolShare">
            <h3>Pool Share</h3>
            <input type="text" placeholder="0.00 USDM" />
          </div>
          <div className="trove-info">
            <p>Liquidation Reserve <span>20 USDM</span></p>
            <p>Borrowing Fee <span>0.00 USDM (0.50%)</span></p>
            <p>Total debt <span>20.00 USDM</span></p>
            <p>Collateral ratio <span>N/A</span></p>
          </div>
          <button className="confirm-button">Confirm</button>
          <button className="cancel-button" onClick={() => setIsDeposit(false)}>Cancel</button>
        </div>
      )}
      

      <Statistics/>
    </div>
  );
};

export default Stability;