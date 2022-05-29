import React from "react";
import Connect from "../../atoms/connect-wallet/Connect";
import Header from "../../atoms/header/Header";
import TabBar from "../../atoms/tab-bar/TabBar";
import '../../../style/EstatesNav.css';
import storeIcon from '../../../assets/vectors/ic-store.svg';
import profileIcon from '../../../assets/vectors/ic-profile.svg';
import searchIcon from '../../../assets/vectors/ic-search.svg';
import EmptySpace from "../../atoms/empty-space/EmptySpace";
import ClickableImage from "../../atoms/clickable-image/ClickableImage";
import * as Data from '../../../data/prop-data';

function EstatesNav() {
    return (
        <div id="nav">
            <Header/>
            <div className="centered">
                <TabBar tabItems={Data.TAB_ITEMS}/>
            </div>
            <div className="row">
                <Connect iconUri={storeIcon} buttonText="My Store" clickHandler={() => console.log('yeah')}/>
                <EmptySpace width="40px"/>
                <ClickableImage imageUri={searchIcon} />
                <EmptySpace width="40px"/>
                <ClickableImage imageUri={profileIcon} />
            </div>
        </div>
    );
}

export default EstatesNav;