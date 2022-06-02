import React, { useState } from "react";
import '../../../style/Hero.css';
import astronaut from '../../../assets/vectors/astronaut.svg';
import Nav from "../../molecules/nav/Nav";
import WalletSelectionDialog from "../../molecules/wallet-selection-dialog/WalletSelectionDialog";
import * as RouteNames from '../../../utils/routenames';
import { Link } from "react-router-dom";
import logIt from '../../../ethereum';

function Hero() {
    const [showDialog, setShowDialog] = useState(false);
    
    return (
        <div id="hero">
            <Nav handleSelection={() => setShowDialog((prevValue) => !prevValue)}/>
            <img id="hero-img" src={astronaut} alt="" />
            {
                showDialog && <WalletSelectionDialog handleClick={() => setShowDialog((prevValue) => !prevValue)}/>
            }
            <h1 id="hero-title">Rent & Lend NFTs in the Metaverse</h1>
            <div id="button-row">
                <Link to={RouteNames.ESTATES}>
                    <button className="row-button">Estates</button>
                </Link>
                <Link to={RouteNames.COLLECTIBLES}>
                    <button className="row-button">Collectibles</button>
                </Link>
                <button className="row-button" onClick={logIt}>Others</button>
            </div>
        </div>
    );
}

export default Hero;