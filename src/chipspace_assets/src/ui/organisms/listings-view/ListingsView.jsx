import React from "react";
import ListingCard from "../../molecules/listing-card/ListingCard";
import '../../../style/ListingsView.css';
import leftArrow from '../../../assets/vectors/arrow_left.svg';
import rightArrow from '../../../assets/vectors/arrow_right.svg';

// TODO: This component represents a horizontal list of ListingCards
function ListingsView({ listName, listings }) {

    return (
        <div className="row listingsview-container">
            <img src={leftArrow} alt="previous button" className="pad-right-25" />
            <div className="column listings-parent-tile">
                <p className="list-name">{listName}</p>
                <div>
                    <div className="row listings">
                        <ListingCard url={listings[0]}/>
                        <ListingCard url={listings[1]}/>
                        <ListingCard url={listings[2]}/>
                        <ListingCard url={listings[3]}/>
                    </div>
                </div>
            </div>
            <img src={rightArrow} alt="next button" className="pad-left-25" />
        </div>
    );
}

export default ListingsView;