import React from "react";
import ListingsView from "../listings-view/ListingsView";
import '../../../style/Main.css';

import cat from '../../../assets/images/listing-cat.png';
import aaron from '../../../assets/images/listing-FC3.jpg';
import noel from '../../../assets/images/listing-noel.png';
import rodent from '../../../assets/images/listing-rodent.png';
import copperHelmet from '../../../assets/images/listing-copper-helmet.png';
import copperShield from '../../../assets/images/listing-copper-shield.png';
import crystalHelmet from '../../../assets/images/listing-crystal-helmet.png';
import crystalSword from '../../../assets/images/listing-crystal-sword.png';
import diamondArmor from '../../../assets/images/listing-diamond-armor.png';
import diamondHelmet from '../../../assets/images/listing-diamond-helmet.png';
import diamondShield from '../../../assets/images/listing-diamond-shield.png';
import diamondWeapon from '../../../assets/images/listing-diamond-weapon.png';
import land1 from '../../../assets/images/listing-land-1.png';
import land2 from '../../../assets/images/listing-land-2.png';
import land3 from '../../../assets/images/listing-land-3.png';
import land4 from '../../../assets/images/listing-land-4.png';


const animals = [cat, aaron, noel, rodent];
const copper = [copperHelmet, copperShield, crystalHelmet, crystalSword];
const diamond = [diamondArmor, diamondHelmet, diamondShield, diamondWeapon];
const land = [land1, land2, land3, land4];


function Main() {
    return (
        <section id="main">
            <ListingsView listName="New Listings" listings={animals}/>
            <ListingsView listName="Estates" listings={land}/>
            <ListingsView listName="Collectibles" listings={copper}/>
            <ListingsView listName="Others" listings={diamond}/>
        </section>
    );
}

export default Main;