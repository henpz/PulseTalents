import React, { useEffect } from "react";
import Vicent from "../artistas/vicent/vicent";



import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjVicentt() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Vicent />
        <Footer />
        
        </div>
    )
}

export default DjVicentt