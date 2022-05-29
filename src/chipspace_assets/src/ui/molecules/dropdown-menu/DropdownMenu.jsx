import React from 'react';
import DropdownItem from '../../atoms/dropdown-item/DropdownItem';
import '../../../style/DropdownMenu.css';

function DropdownMenu() {
    return (
        <div className='col dropdown-menu'>
            <DropdownItem name="All networks"/>
            <DropdownItem name="All nets"/>
            <DropdownItem name="All networks"/>
            <DropdownItem name="All networks"/>
            <DropdownItem name="All networks"/>
            <DropdownItem name="All networks"/>
        </div>
    );
}

export default DropdownMenu;