import React, { useEffect } from "react";
import Fleck from "../artistas/fleck/fleck";


import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjFleke() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Fleck />
        <Footer />
        
        </div>
    )
}

export default DjFleke