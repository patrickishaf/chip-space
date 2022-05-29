import React from "react";
import '../../../style/Footer.css';
import twitter from '../../../assets/vectors/twitter.svg';
import reddit from '../../../assets/vectors/reddit.svg';
import telegram from '../../../assets/vectors/telegram.svg';
import discord from '../../../assets/vectors/discord.svg';

function Footer() {
    return (
        <footer className="row footer">
            <ul className="row footer-links">
                <li className="footer-link">Privacy Policy</li>
                <li className="footer-link">Terms of Use</li>
                <li className="footer-link">Whitepaper</li>
                <li className="footer-link">FAQ</li>
                <li className="footer-link">Press</li>
                <li className="footer-link">Careers</li>
                <li className="footer-link">Code of Ethics</li>
            </ul>
            <div className="row">
                <div className="row social-icons">
                    <img className="social-icon" src={twitter} alt="" />
                    <img className="social-icon" src={reddit} alt="" />
                    <img className="social-icon" src={telegram} alt="" />
                    <img className="social-icon" src={discord} alt="" />
                </div>
                <p className="copyright">© 2022 Black Pepper</p>
            </div>
        </footer>
    );
}

export default Footer;