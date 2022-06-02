import React from "react";
import '../../../style/WalletButton.css';

function WalletButton({ name, logo, onClick }) {
    return (
        <button onClick={onClick} className="row wallet-btn">
            <img className="wallet-btn-icon" src={logo} alt="Blockchain Wallet type" />
            <div className="wallet-btn-spacing" />
            <p className="wallet-name">{name}</p>
        </button>
    );
}

export default WalletButton;