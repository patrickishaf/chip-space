import React from "react";
import '../../../style/ListingCard.css';
import ethIcon from '../../../assets/vectors/icon-ethereum.svg';
import { Link } from "react-router-dom";
import * as RouteNames from '../../../utils/routenames';

// TODO: remember to check the css handbook for the flexbox property used to set the max number of children a flexbox can have. Use it to make the listings row to have variable numbers of children at different screen resolutions
// TODO: Look for a css property that can make the width of an element(image) to fit in its parent
function ListingCard({url}) {
    return (
        <Link to={RouteNames.LISTING_DETAILS} >
            <div className="listing-card">
                <div className="center">
                    <img className="listing-image" src={url} alt="NFT listing" loading="lazy" />
                </div>
                <div className="listing-description">
                    <p className="listing-name">Item name</p>
                    <div className="row rental-row">
                        <p className="rental-key">Rental period</p>
                        <p className="rental-value">2 - 365 Days</p>
                    </div>
                    <div className="row price-row">
                        <p className="price-key">$ 3.24</p>
                        <div className="row price-value">
                            <img className="icon-token" src={ethIcon} alt="" />
                            <p className="rates">0.0001/Day</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ListingCard;