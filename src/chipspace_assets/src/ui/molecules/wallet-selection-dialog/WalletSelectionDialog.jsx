import React from "react";
import '../../../style/WalletSelectionDialog.css';
import cancelIcon from '../../../assets/vectors/icon-cancel.svg';
import metmask from '../../../assets/vectors/metamask.svg';
import coinbase from '../../../assets/vectors/coinbase.svg';
import WalletButton from "../../atoms/wallet-button/WalletButton";
import logIt, { connectWallet } from "../../../ethereum";

const wallets = [
    {
        icon: metmask,
        name: 'Metamask'
    },
    {
        icon: coinbase,
        name: 'Coinbase Wallet'
    }
    
]

function WalletSelectionDialog(props) {
    return (
        <div className="wallet-selection-dialog column">
            <img className="close-dialog-icon" onClick={() => props.handleClick()} src={cancelIcon} alt="cancel wallet connection" />
            <p className="dialog-title">Choose Wallet</p>
            <div className="dialog-content column">
                <WalletButton onClick={connectWallet} logo={wallets[0].icon} name={wallets[0].name}/>
                <WalletButton onClick={logIt} logo={wallets[1].icon} name={wallets[1].name}/>
            </div>
        </div>
    );
}

export default WalletSelectionDialog;