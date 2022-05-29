import React, { useState } from "react";
import '../../../style/ListingDescriptionMain.css';
import calendarIcon from '../../../assets/vectors/ic-calendar.svg';
import ethIcon from '../../../assets/vectors/icon-ethereum.svg';
import decentraland from '../../../assets/vectors/decentraland.svg';
import likeIcon from '../../../assets/vectors/icon-favorite.svg';
import shareIcon from '../../../assets/vectors/icon-share.svg';
import land from '../../../assets/vectors/listing-land-1.svg';
import locationPurple from '../../../assets/vectors/icon-location-purple.svg';
import PaymentPlanBtn from "../../atoms/payment-plan-btn/PaymentPlanBtn";

function ListingDescriptionMain() {
    const [lat, setLat] = useState(-140);
    const [long, setLong] = useState(-39);

    const ownerAddress = '0xeDDEDb0B6911D8dc5a6008a91A7EcE7b82AfFE9C';
    const price = 0.28;
    const rate = 0.0001;
    const startDate = '23-Apr-2022';
    const endDate = '23-May-2022';
    const total = 0.0030;

    return (
        <div className="row row-spaced">
            <img className="detail-img" src={land} alt="the location of a piece of land on the metaverse map"/>
            <div className="col detail-details">
                <div className="row row-spaced detail-tier-1">
                    <div className="col detail-network-ic">
                        <img src={decentraland} alt="network icon" />
                        <p className="detail-network-name">Decentraland</p>
                    </div>
                    <div className="row row-spaced detail-coords-title">
                        <img className="tiny-logo" src={locationPurple} alt="location icon" />
                        <p className="detail-land-coords">{`${lat} ${long}`}</p>
                    </div>
                </div>
                <div className="col col-spaced details-card detail-tier-2">
                    <div className="detail-item row row-spaced">
                        <p className="detail-item-key">Owner</p>
                        <p className="detail-item-value owner-address">{ownerAddress}</p>
                    </div>
                    <div className="detail-item row row-spaced">
                        <p className="detail-item-key">Price</p>
                        <p className="row detail-item-value detail-price-value">
                            <span>{`~$${price} `}</span>
                            <span className="daily-rate">
                                {`${rate}/Day`}
                            </span>
                            <img src={ethIcon} alt="network icon" />
                        </p>
                    </div>
                    <div className="detail-item row row-spaced">
                        <p className="detail-item-key">Start Date</p>
                        <p className="detail-item-value detail-rent-date row">
                            {startDate}<img src={calendarIcon} alt="calendar select date" className="ic-padded-l" />
                        </p>
                    </div>
                    <div className="detail-item row row-spaced">
                        <p className="detail-item-key">End Date</p>
                        <p className="detail-item-value detail-rent-date row">
                            {endDate}<img src={calendarIcon} alt="calendar select date" className="ic-padded-l" />
                        </p>
                    </div>
                    <div className="outlined-btn detail-item row row-spaced">
                        <p className="detail-item-key">Total</p>
                        <p className="detail-item-value row">
                            {total}<img src={ethIcon} alt="calendar select date" className="ic-padded-l" />
                        </p>
                    </div>
                </div>
                <div className="payment-plans row row-spaced detail-tier-3">
                    <PaymentPlanBtn title="Daily" isSelected={true} />
                    <PaymentPlanBtn title="Monthly" subtitle="5% discount" isSelected={false} />
                    <PaymentPlanBtn title="Daily" subtitle="15% discount" isSelected={false} isDisabled={true} />
                </div>
                <div className="row detail-tier-4">
                    <div className="outlined-btn" id="btn-like-listing">
                        <img src={likeIcon} alt="like property" />
                    </div>
                    <button className="btn-rent">Rent</button>
                    <div className="outlined-btn row btn-share-listing">
                        <img src={shareIcon} alt="share listing" /><span>Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingDescriptionMain;