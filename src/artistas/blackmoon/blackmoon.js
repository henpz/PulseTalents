import React from "react";
import './blackmoon.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './blackmlogo.png'
import Spot from '../img/spotify.png'


function Blackm () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photoblackm"></div>

            

            <div className="logoblackm">
                <img src={Logo} />
            </div>

            <div className="blackmsobre">

            

                <h1>
                Black Moon é a junção dos djs Gustavo Duarte do projeto Sonic Sky
                        e o dj Duh Toledo do projeto Traxie's Moon.

                        Black moon é umas das revelações do nosso encantador Pia'S Bar
                        onde vem se destacando através do som noturno bem dançante e psicodélico, 
                        mais conhecido como Fullon Nigth, trazendo consigo o pico de euforia constante 
                        do começo ao fim de sua apresentação, concretizando o verdadeiro transceder...

                        <br/><br/> GÊNEROS MUSICAIS: FULLON NIGHT<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

            
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-blackm">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send/?phone=5519984563642&text&type=phone_number&app_absent=0" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"> <a href="mailto:Gustavo_slip95@outlook.com"><img  id="wpp"src={Eml}/></a></div>

                </div>

                <h1 id="enviarmsg">DEIXE UMA MENSAGEM PARA O ARTISTA</h1>

        <div className="form-container">
            
             <div className="formulario">
                <label>NOME</label>
                <input type="text" name="name" placeholder="Digite seu nome" autoComplete="off" required></input>
                <label>EMAIL</label>
                <input type="email" name="email" placeholder="Digite seu E-mail" autoComplete="off" required></input>
                <label>MENSAGEM</label>
                <textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
                <button id="btn-mensagem" type="submit">ENVIAR</button>
                <input type="hidden" name="accessKey" value="7c3a8cb0-5d92-4c4b-abaf-c3ac743fde99"/>
             </div>
        </div>
        </div>

            
        </>
    )
}

export default Blackm