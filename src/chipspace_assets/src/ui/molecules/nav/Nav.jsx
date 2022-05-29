import React, { useState } from "react";
import Connect from "../../atoms/connect-wallet/Connect";
import EmptySpace from "../../atoms/empty-space/EmptySpace";
import Header from "../../atoms/header/Header";
import TabBar from "../../atoms/tab-bar/TabBar";
import Search from "../search/Search";
import * as Data from "../../../data/prop-data";
import '../../../style/Nav.css';

function Nav({handleSelection}) {
    const [searchMode, setSearchMode] = useState(false);

    return (
        <div id="nav" className="row">
            <Header/>
            <div className="centered">
                <TabBar tabItems={Data.TAB_ITEMS}/>
            </div>
            <div className="row nav-actions">
                <Search onClickSearch={() => setSearchMode(!searchMode)}/>
                <EmptySpace width="24px" />
                {
                    !searchMode && <Connect clickHandler={handleSelection ? () => {handleSelection()} : () => {console.log('no click handler assigned to this thng right here')}}/>
                }
            </div>
        </div>
    );
};

export default Nav;