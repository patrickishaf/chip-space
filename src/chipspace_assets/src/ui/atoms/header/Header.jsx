import React from "react";
import '../../../style/Header.css';
import logo from '../../../assets/images/logo-blackhole.png';
import { Link } from "react-router-dom";
import * as RouteNames from '../../../utils/routenames';

function Header() {
    return (
        <Link to={RouteNames.HOME}>
            <div id="header">
                <img id="header-leading" src={logo} alt="Black pepper logo" />
                <div id="header-spacing"></div>
                <h1 id="header-title">CHIPSPACE</h1>
            </div>
        </Link>
    );
}

export default Header;