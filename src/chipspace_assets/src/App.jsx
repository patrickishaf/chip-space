import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as RouteNames from './utils/routenames';
import Home from './ui/routes/home/Home';
import Estates from './ui/routes/estates/Estates';
import ListingDetails from './ui/routes/listing-details/ListingDetails';
import Collectibles from './ui/routes/collectibles/Collectibles';

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path={RouteNames.HOME} element={<Home/>} />
                    <Route path={RouteNames.ESTATES} element={<Estates/>} />
                    <Route path={RouteNames.LISTING_DETAILS} element={<ListingDetails/>} />
                    <Route path={RouteNames.COLLECTIBLES} element={<Collectibles/>} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;