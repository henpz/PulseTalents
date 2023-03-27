import React from "react";
import './contrato.css'
import Ft1 from './dj.png'
import Ft2 from './som.png'
import Ft3 from './musica.png'

function Contrato () {
    return(
        <>
        <h1 id="title2">Por que você deveria nos contratar?</h1>
        <div className="container-contrato">
            <div className="qualidades-container">
                <div className="texto-box">
                <h2>SERÁ UM PRAZER TOCAR EM SUA FESTA</h2><br/>
                <h3>A Pulse Talents irá garatir qualidade e comprometimento, para que seu evento seja inesquecível veja como abaixo:</h3>
                </div>

                <div className="box-container">

                <div className="qualidade"><img id="fto" src={Ft1}/><span>Temos os melhores e mais qualificados artistas quesabem exatamente como animar uma multidão e criar a atmosfera perfeita para cada evento.</span></div>
                
                <div className="qualidade"><img id="fto"src={Ft2} /><span>Nosso compromisso é fornecer equipamentos de alta qualidade aos nossos clientes, por isso trabalhamos com marcas consolidadas e reconhecidas no mercado.</span></div>
                <div className="qualidade"><img id="fto"src={Ft3} /><span>empresa tem anos de experiência na área de música eletrônica e já trabalhou em diversos tipos de eventos, desde festas privadas até grandes festivais. 
            </span></div>
                

                </div>

            </div>
           
        </div>
        </>
    )
}

export default Contrato