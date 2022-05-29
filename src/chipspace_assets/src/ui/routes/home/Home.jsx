import React from "react";
import Hero from "../../organisms/hero/Hero";
import Main from "../../organisms/main/Main";
import Partners from "../../organisms/partners/Partners";
import '../../../style/Home.css';

function Home() {
    return (
        <div id="home">
            <Hero/>
            <Main/>
            <Partners/>
        </div>
    );
}

export default Home;