import React, { useEffect } from "react";

import Newcode from "../artistas/newcode/newcode";


import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

function DjNewcode() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>

        <Header />
        <Newcode />
        <Footer />
        
        </div>
    )
}

export default DjNewcode