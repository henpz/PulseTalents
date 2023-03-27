import React, { useEffect } from "react";
import Action from "../artistas/actionmind/action";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjAction () {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>
            
        <Header />
        <Action />
        <Footer />
        
        </div>
    )
}

export default DjAction