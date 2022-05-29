import React from "react";
import '../../../style/WalletButton.css';

function WalletButton(props) {
    return (
        <button className="row wallet-btn">
            <img className="wallet-btn-icon" src={props.logo} alt="Blockchain Wallet type" />
            <div className="wallet-btn-spacing" />
            <p className="wallet-name">{props.name}</p>
        </button>
    );
}

export default WalletButton;