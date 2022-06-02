import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const logIt = () => {
    console.log(provider);
}

export const connectWallet = async () => {
    await provider.send('eth_requestAccounts', []);
}

export default logIt;