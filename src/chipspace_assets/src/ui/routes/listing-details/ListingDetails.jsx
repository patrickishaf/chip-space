import React from "react";
import ListingMetadatum from "../../atoms/listing-metadatum/ListingMetaDatum";
import Footer from "../../molecules/footer/Footer";
import Nav from "../../molecules/nav/Nav";
import ListingDescriptionMain from "../../organisms/listing-desc-main/ListingDescriptionMain";
import '../../../style/ListingDetails.css';

const locationMetadata = [
    {
        key: 'X',
        value: '-140 of 163'
    },
    {
        key: 'Y',
        value: '-39 of 158'
    },
    {
        key: 'Distance to road',
        value: '0 of 9'
    },
    {
        key: 'Distance to plaza',
        value: '7 of 9'
    },
    {
        key: 'Distance to district',
        value: '2 of 9'
    },
]

const detailData = [
    {
        key: 'doLAND Contract Address',
        value: '0x8b81dgdse45vd555gdesaa…89dd',
    },
    {
        key: 'doLAND Token ID',
        value: '8',
    },
    {
        key: 'LAND Contract Address',
        value: '0xf87evhjvjx4zo9hhkgfdrrdizf…5d4d',
    },
    {
        key: 'LAND Token ID',
        value: '2211835384dg6ikjjgjfdsr79gzguffff…',
    },
    {
        key: 'Token Standard',
        value: 'ERC-721',
    },
    {
        key: 'Blockchain',
        value: 'Ethereum',
    }
]

function ListingDetails() {
    return (
        <div className="listing-details">
            <div className="details-hero">
                <Nav/>
                <div className="listing-desc-main">
                    <ListingDescriptionMain />
                </div>
            </div>
            <div className="listing-body">
                <p className="listing-subheader">Land near new city, earn 100$/mo</p>
                <div className="listing-metadata-section">
                    <p className="listing-section-title">Location</p>
                    {
                        locationMetadata.map((item) => <ListingMetadatum key={item.key} name={item.key} value={item.value} />)
                    }
                </div>
                <div className="listing-metadata-section">
                    <p className="listing-section-title">Details</p>
                    {
                        detailData.map((item) => <ListingMetadatum key={item.key} name={item.key} value={item.value} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ListingDetails;