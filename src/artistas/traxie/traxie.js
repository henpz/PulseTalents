import React from "react";
import './traxie.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './traxieslogo.png'
import Spot from '../img/spotify.png'


function Traxie () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="phototraxie"></div>

            

            <div className="logotraxie">
                <img src={Logo} />
            </div>

            <div className="traxiesobre">

            

                <h1>
                Traxie'S Moon, um duo formado pelos DJ's Duh Toledo e Pedro Pianesc que  vem conquistando espaço através de grooves expressivos e uma apresentação enérgica.

 
                        <br/><br/> GÊNEROS MUSICAIS: FULLON GROVE<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

               
           
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-traxie">

                    <div className="wpp"> <a href="mailto:toledo.pulsebookings@gmail.com"><img  id="wpp"src={Eml}/></a></div>

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

export default Traxie