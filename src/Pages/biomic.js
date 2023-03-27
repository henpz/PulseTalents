import React, { useEffect } from "react";
import Biomic from "../artistas/biomic/biomic";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjBiomic () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>

        <Header />
        <Biomic />
        <Footer />
        
        </div>
    )
}

export default DjBiomic