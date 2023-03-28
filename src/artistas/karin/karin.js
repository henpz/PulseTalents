import React from "react";
import './karin.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './karinlogo.png'
import Spot from '../img/spotify.png'


function Karin () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photokarin"></div>

            

            <div className="logokarin">
                <img src={Logo} />
            </div>

            <div className="karinsobre">

            

                <h1>
                Karin, DJ formada na Alumnus Concert e natural da cidade de Leme/SP.

                    Um projeto que começou a partir de brincadeiras em festas privadas e por excessivos pedidos de seus mais amigos mais próximos.

                    Com talento natural, Karin vem embalada pelo ritmo do Bass House e é capaz de conduzir grandes pistas a uma grande atmosfera de alegria e euforia.

                        <br/><br/> GÊNEROS MUSICAIS: BASS HOUSE<br/><br/>LOCALIZAÇÃO: LEME - SP
                </h1><br/>
                
            </div>

            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-karin">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send?phone=5519997027577" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/karin_sound/?igshid=YmMyMTA2M2Y%3D" ><img id="wpp"src={Ig}/></a></div>

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

export default Karin