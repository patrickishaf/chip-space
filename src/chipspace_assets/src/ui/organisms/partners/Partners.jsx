import React from "react";
import '../../../style/Partners.css';
import alice from '../../../assets/vectors/logo-alice.svg';
import axie from '../../../assets/vectors/logo-axieinfinity.svg';
import decentraland from '../../../assets/vectors/logo-decentraland.svg';
import sand from '../../../assets/vectors/logo-sandbox-sand.svg';
import Footer from "../../molecules/footer/Footer";

function Partners() {
    return (
        <section id="partners-section">
            <h1 id="partners-header">Top Partners</h1>
            <div id="partner-images" className="row">
                <img className="partner-image" src={decentraland} alt="decentraland partner" />
                <img className="partner-image" src={axie} alt="axie infinity partner" />
                <img className="partner-image" src={sand} alt="sandbox SAND partner" />
                <img className="partner-image" src={alice} alt="alice partner" />
            </div>
            <Footer/>
        </section>
    );
}

export default Partners;