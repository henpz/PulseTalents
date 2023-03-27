import React, { useEffect } from "react";
import Aristids from "../artistas/aristids/aristids";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjAristids () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>
            
        <Header />
        <Aristids />
        <Footer />
        
        </div>
    )
}

export default DjAristids