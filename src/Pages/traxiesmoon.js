import React, { useEffect } from "react";
import Traxie from "../artistas/traxie/traxie";



import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjTraxies() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(

        
        <div>

        <Header />
        < Traxie/>
        <Footer />
        
        </div>
    )
}

export default DjTraxies