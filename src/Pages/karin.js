import React, { useEffect } from "react";
import Karin from "../artistas/karin/karin";

import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjKarin () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>

        <Header />
        <Karin />
        <Footer />
        
        </div>
    )
}

export default DjKarin