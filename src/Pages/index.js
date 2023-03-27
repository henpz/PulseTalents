import React from "react";
import Contrato from "../components/Contrato/contrato";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Sobre from "../components/Sobre/sobre";
import Team from "../components/Team/team";
import Photo from "../components/Photo/photo";

function Home () {

    
    return(
        <div>
        <Header />
        <Photo />
        <Sobre />
        <Contrato />
        <Team />
        <Footer />
        </div>
        
    )
}

export default Home