import React, { useEffect } from "react";
import Blackm from "../artistas/blackmoon/blackmoon";

import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjBlackm () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>

        <Header />
        <Blackm />
        <Footer />
        
        </div>
    )
}

export default DjBlackm