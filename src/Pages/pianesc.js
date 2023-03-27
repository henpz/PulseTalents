import React, { useEffect } from "react";

import Pia from "../artistas/pianesc/pia";


import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjPia() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Pia />
        <Footer />
        
        </div>
    )
}

export default DjPia