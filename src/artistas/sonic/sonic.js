import React from "react";
import './sonic.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './soniclogo.png'
import Spot from '../img/spotify.png'


function Sonic () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photosonic"></div>

            

            <div className="logosonic">
                <img src={Logo} />
            </div>

            <div className="sonicsobre">

            

                <h1>    Por trás do projeto "Sonic sky", Gustavo Duarte vem de uma base forte adquirida  a partir da maratona de conhecimento Alumnus studo,  tendo como seu mentor o conhecido NewCode.

Trazendo consigo uma grande mensagem: fullon e foda-se, seu projeto deixa claro o que trará as pistas.

                        <br/><br/> GÊNEROS MUSICAIS: FULLON GROVE AND FULLON NIGHT<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

            
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-sonic">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send/?phone=5519984563642&text&type=phone_number&app_absent=0" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/gustavo_hduarte/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a href="mailto:gustavo_slip95@outlook.com"><img  id="wpp"src={Eml}/></a></div>

                </div>

                <h1 id="enviarmsg">DEIXE UMA MENSAGEM PARA O ARTISTA</h1>

        <div className="form-container">
            
            <form action="https://formsubmit.co/pulsetalents@gmail.com" method="POST"> 
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
            </form>
        </div>
        </div>

            
        </>
    )
}

export default Sonic