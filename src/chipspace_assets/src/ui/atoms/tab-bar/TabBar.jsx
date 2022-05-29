import React, { useState } from "react";
import '../../../style/TabBar.css';
import TabItem from "../tab-tem/TabItem";

function TabBar({ tabItems }) {

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    return (
        <div>
            <ul className="row tabbar">
            {
                tabItems.map((tabItem, tabIndex) => 
                    <TabItem 
                        key={tabItem.routeName + tabIndex}
                        isSelected={(tabIndex === selectedTabIndex) ? true : false}
                        title={tabItem.title}
                        href={tabItem.href}
                        routeName={tabItem.routeName}
                        onClick={() => setSelectedTabIndex(tabIndex)} />
                )
            }
            </ul>
        </div>
    );
}

export default TabBar;