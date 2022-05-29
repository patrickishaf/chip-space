import React from "react";
import AdvancedFilter from "../../molecules/advanced-filter/AdvancedFilter";
import EstatesNav from "../../molecules/estates-nav/EstatesNav";
import '../../../style/EstatesHero.css';

function EstatesHero() {
    const matches = 255;
    return (
        <div id="estate-hero">
            <EstatesNav />
            <h1 id="hero-title">Rent Virtual Estates, get Real Value</h1>
            <AdvancedFilter/>
            <button className="btn-matches">{`${matches} Matches`}</button>
        </div>
    );
}

export default EstatesHero;