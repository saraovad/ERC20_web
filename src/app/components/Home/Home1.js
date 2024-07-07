import React from 'react';
import './Home.css';
import './HomeGraph'
import Example from './HomeGraph';
import { Routes, Route, Link } from 'react-router-dom';
import Trove from '../Trove/Trove';
import Stability from '../Stability/Stability';

const Home1= () => {
  return (
  <div>
    <div className="app">
     
      
      <main className="main">
        <h1>Forging a new era of sound 
          <br/>money, secured algorithmically</h1>

        <div className="card-container">
          {/* <div className="card">
            <div className="card-icon">
              <img src="lending-icon.png" alt="Lending" />
            </div>
            <h2>Lending</h2>
            <p>Meridian Lend provides a decentralized money market, connecting lenders with borrowers. Lenders earn passive income by providing liquidity, while borrowers secure overcollateralized loans.</p>
            <button>Launch Meridian Lend</button>
          </div> */}
          <div className="card">
            <div className="card-icon">
              <img src="stablecoin-icon.png" alt="Decentralized Stablecoin" />
            </div>
            <h2>Decentralized Stablecoin</h2>
            <p>Meridian Mint is a decentralized, non-custodial, governance-free borrowing protocol that enables one to obtain interest-free loans against whitelisted collateral. Loans are paid in USDM - a USD-pegged stablecoin.</p>
            <button href="../Stability/Stability.js">Launch Meridian Mint</button>
          </div>
          {/* <div className="card">
            <div className="card-icon">
              <img src="trading-icon.png" alt="Leverage Trading Platform" />
            </div>
            <h2>Leverage Trading Platform</h2>
            <p>Meridian Trade is the Leveraged DeFi trading platform within the Meridian suite of products. Traders can use USDM for derivatives trading to ensure that they stay fully decentralized.</p>
            <button>Launch Meridian Trade</button>
          </div> */}
        </div>
      </main>
    </div>
    <div className="top_div_graph">
    <div className="graphs">
       <Example/>
      </div>
      <div className="lines">
        <h3>Trove Pool</h3>
        <p>Trove PoolTrove PoolTrove Poolv<br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        <br/>Trove PoolTrove PoolTrove PoolTrove PoolTrove Pool
        </p>
      </div>

    </div>
     
  </div>
  );
}

export default Home1;






// }