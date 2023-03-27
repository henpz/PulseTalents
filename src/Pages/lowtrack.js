import React, { useEffect } from "react";

import Low from "../artistas/lowtrack/low";


import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjLowtreck() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Low />
        <Footer />
        
        </div>
    )
}

export default DjLowtreck