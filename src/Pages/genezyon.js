import React, { useEffect } from "react";
import Genezyon from "../artistas/genezyon/genezyon";


import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjGenezyon() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Genezyon />
        <Footer />
        
        </div>
    )
}

export default DjGenezyon