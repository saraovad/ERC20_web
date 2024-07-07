import React from 'react';
import './Statistics.css';
const Statistics=()=>{
    return(
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
    )
}
export default Statistics;