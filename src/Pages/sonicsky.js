import React, { useEffect } from "react";
import Sonic from "../artistas/sonic/sonic";



import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjSonic() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Sonic />
        <Footer />
        
        </div>
    )
}

export default DjSonic