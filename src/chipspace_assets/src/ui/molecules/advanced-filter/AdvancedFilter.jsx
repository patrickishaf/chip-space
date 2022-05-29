import React from "react";
import DropdownButton from "../../atoms/dropdown-button/DropdownButton";
import '../../../style/AdvancedFilter.css';

function AdvancedFilter() {
    return (
        <div className="grid advanced-filter">
            <DropdownButton value="Decentraland" />
            <DropdownButton value="House, Land" />
            <DropdownButton value="All Networks" />
            <DropdownButton value="Maximum Price" />
            <DropdownButton value="Rental period" />
            <DropdownButton value="Maximum Area" />
        </div>
    );
}

export default AdvancedFilter;