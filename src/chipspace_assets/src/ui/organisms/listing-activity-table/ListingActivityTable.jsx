import React from 'react';
import '../../../style/ListingActivityTable.css';

function ListingActivityTable() {
    return (
        <div className="listing-activity-table">
            <p className="listing-activity-table-title">Item Activity</p>
            <div className="table-title listing-activity-table-row">
                <p className='table-title-text'>Event</p>
                <p className='table-title-text'>Price</p>
                <p className='table-title-text'>Start time</p>
                <p className='table-title-text'>Lease Term</p>
                <p className='table-title-text'>From</p>
                <p className='table-title-text'>To</p>
            </div>
        </div>
    );
}

export default ListingActivityTable;