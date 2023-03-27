import React, { useEffect } from "react";

import Newcode from "../artistas/newcode/newcode";
import Slound from "../artistas/sloundness/sloundness";


import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjSlound() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Slound />
        <Footer />
        
        </div>
    )
}

export default DjSlound