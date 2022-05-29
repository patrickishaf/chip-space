import React from "react";
import '../../../style/Connect.css';
import connectIcon from '../../../assets/vectors/connect.svg';

function Connect({clickHandler, iconUri=connectIcon, buttonText='Connect Wallet'}) {
    return(
        <button onClick={() => {clickHandler()}}>
            <div id="button-child">
                <img id="connect-icon" src={iconUri} alt="connect to wallet" />
                <div id="button-icon-spacing"></div>
                {buttonText}
            </div>
        </button>
    );
}

export default Connect;