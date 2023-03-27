import React, { useEffect } from "react";
import Eriston from "../artistas/eriston/eriston";

import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjEriston () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Eriston />
        <Footer />
        
        </div>
    )
}

export default DjEriston 