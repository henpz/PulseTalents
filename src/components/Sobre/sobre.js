import React, { useEffect } from "react";
import Ftsobre from './qmsomos.jpg'
import './sobre.css'




function Sobre (){
    
   


    return(
        
        <><h1 id="title1">QUEM SOMOS</h1>
        
        <div id="02" className="sobre-container">

            <div className="sobre-text">
            
            <h3 id="scroll2">
            <h2 id="scroll1">
            QUEM SOMOS, NOSSA HISTÓRIA E MISSÃO
            </h2>
            A Pulse Talents é uma empresa preparada para oferecer serviços de produção de eventos em grande estilo, incluindo pacotes de Sonorização e DJ, com o melhor compromisso do mercado em São Paulo e região.

    <br/><br/>Com uma vasta experiência no mercado de organização e produção de festas e eventos, bem como no agenciamento de DJs, estamos comprometidos em oferecer sempre o melhor em equipamentos.<br/><br/> Desde 2020, somos referência no mercado de Festas e Eventos em São Paulo.

Nossa equipe de DJs é composta por profissionais experientes, que possuem repertórios únicos e qualificação necessária para tornar o seu evento num verdadeiro espetáculo.<br/><br/> Além disso, garantimos um atendimento personalizado e sob medida para cada cliente, garantindo a satisfação total de nossos clientes. Conte com a Pulse Talents para transformar o seu evento em uma experiência inesquecível!
            </h3>
            </div>
            <div className="img1">
            <img id="modelo1" src={Ftsobre} />
            </div>
        </div>
        </>
    )
}

export default Sobre
