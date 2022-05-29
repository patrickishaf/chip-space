import React, { useState } from "react";
import '../../../style/DropdownButton.css';
import dropdownIcon from '../../../assets/vectors/icon-dropdown.svg';
import DropdownMenu from "../../molecules/dropdown-menu/DropdownMenu";


function DropdownButton({ value }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <button onClick={() => setIsExpanded((prevValue) => !prevValue)} className="row dropdown-btn">
            {value}
            {
                !isExpanded && <img src={dropdownIcon} alt="dropdown" className="dropdown-icon" />
            }
            {
                isExpanded && <DropdownMenu />
            }
        </button>
    );
}

export default DropdownButton;