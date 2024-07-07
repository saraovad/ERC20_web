'use client'; 
import React from 'react';
import './Home.css';
import { useState, useMemo } from "react";
import * as React from 'react';
// import Button from '@mui/material/Button';



const Home=()=>{



    return(
<div>
    <div className="top-card">
        <header>
            <logo/>
        </header> 
        <div className="title">
            <h1>Forging a new era of sound <br/>
            money, secured algorithmically </h1>
        </div>
        <div className = "mint">
            <img class="img_project" src="../../../../public/mint.png" alt="mint pic"/>
            <h5>Decentralized Stablecoin</h5>
            <p>Meridian Mint is a decentralized, non-custodial,<br/>
             governance-free borrowing protocol that enables <br/>
             one to obtain interest-free loans against <br/>
             whitelisted collateral. Loans are paid in USDM - a <br/>
             USD-pegged stablecoin.</p>
            {/* <Button variant="Launch_Meridian_Mint" href="./Stability.js">Launch Meridian Mint</Button>
            <Button href="#text-buttons">Link</Button> */}
        </div>
    </div>

</div>

    )
}
export default Home;


















// user@user-ThinkCentre-M70q-Gen-3:~/new_erc20_web$ git pull origin main
// remote: Enumerating objects: 3, done.
// remote: Counting objects: 100% (3/3), done.
// remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
// Unpacking objects: 100% (3/3), 203 bytes | 203.00 KiB/s, done.
// From https://github.com/saraovad/ERC20_web
//  * branch            main       -> FETCH_HEAD
//  * [new branch]      main       -> origin/main
// hint: You have divergent branches and need to specify how to reconcile them.
// hint: You can do so by running one of the following commands sometime before
// hint: your next pull:
// hint: 
// hint:   git config pull.rebase false  # merge (the default strategy)
// hint:   git config pull.rebase true   # rebase
// hint:   git config pull.ff only       # fast-forward only
// hint: 
// hint: You can replace "git config" with "git config --global" to set a default
// hint: preference for all repositories. You can also pass --rebase, --no-rebase,
// hint: or --ff-only on the command line to override the configured default per
// hint: invocation.
// fatal: Need to specify how to reconcile divergent branches.
// user@user-ThinkCentre-M70q-Gen-3:~/new_erc20_web$ 