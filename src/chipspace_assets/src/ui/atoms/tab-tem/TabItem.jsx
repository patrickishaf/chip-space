import React, { MouseEventHandler } from 'react';
import '../../../style/TabItem.css';

function TabItem({ title, href, routeName, onClick, isSelected=false}) {
    const selectedStyle = {
        padding: '8px',
        backgroundColor: '#6B6B6B',
        borderRadius: '6px'
    }
    return (
        <li style={isSelected ? selectedStyle : {}} key={title} className="navlink" onClick={onClick}>
            <a href={href}>{title}</a>
        </li>
    )
}

export default TabItem;