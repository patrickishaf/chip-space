import React from "react";
import EstatesHero from "../../organisms/estates-hero/EstatesHero";
import '../../../style/Estates.css';
import land1 from '../../../assets/images/listing-land-1.png';
import land2 from '../../../assets/images/listing-land-2.png';
import land3 from '../../../assets/images/listing-land-3.png';
import land4 from '../../../assets/images/listing-land-4.png';
import ListingCard from "../../molecules/listing-card/ListingCard";
import Footer from "../../molecules/footer/Footer";
import Paginator from "../../molecules/paginator/Paginator";


const listings = [
    land1,
    land2,
    land3,
    land4,
    land1,
    land2,
    land3,
    land4,
    land1,
    land2,
    land3,
    land4,
    land1,
    land2,
    land3,
    land4,
];

function Estates() {
    return (
        <div>
            <EstatesHero/>
            <section className="estate-listings grid">
                {
                    listings.map((listing, index) => <ListingCard key={listing + index.toString()} url={listing}/>)
                }
            </section>
            <Paginator numberOfPages={3} />
            <Footer />
        </div>
    );
}

export default Estates;