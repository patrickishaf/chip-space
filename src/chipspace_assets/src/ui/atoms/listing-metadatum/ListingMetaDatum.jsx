import React from "react";
import '../../../style/ListingMetadatum.css';

function ListingMetadatum({ name, value }) {
    return (
        <div className="listing-metadatum row">
            <div className="metadatum-key">
                {name}
            </div>
            <div className="metadatum-value">{value}</div>
        </div>
    );
}

export default ListingMetadatum;