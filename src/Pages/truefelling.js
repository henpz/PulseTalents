import React, { useEffect } from "react";
import True from "../artistas/truefelling/true";



import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjTrue() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <True />
        <Footer />
        
        </div>
    )
}

export default DjTrue