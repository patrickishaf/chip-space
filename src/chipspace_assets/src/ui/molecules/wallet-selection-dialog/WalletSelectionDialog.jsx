import React from "react";
import '../../../style/WalletSelectionDialog.css';
import cancelIcon from '../../../assets/vectors/icon-cancel.svg';
import metmask from '../../../assets/vectors/metamask.svg';
import coinbase from '../../../assets/vectors/coinbase.svg';
import WalletButton from "../../atoms/wallet-button/WalletButton";

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
                {
                    wallets.map((wallet) => <WalletButton logo={wallet.icon} name={wallet.name}/>)
                }
            </div>
        </div>
    );
}

export default WalletSelectionDialog;