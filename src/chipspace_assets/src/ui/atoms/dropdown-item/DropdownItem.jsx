import React from "react";
import '../../../style/DropdownItem.css';

function DropdownItem(props) {
    return (
        <div className="row dropdown-item">
            <div className="row dropdown-content">
                <input type="checkbox" name={props.name} id={props.name} />
                <span>{props.name}</span>
            </div>
            {
                props.iconUri && <img src={props.iconUri} alt="wallet network provider" />
            }
        </div>
    );
}

export default DropdownItem;