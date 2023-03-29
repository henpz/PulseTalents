import React from "react";
import './fleck.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './flekelogo.png'



function Fleck () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photofleck"></div>

            

            <div className="logofleck">
                <img src={Logo} />
            </div>

            <div className="flecksobre">

            

                <h1>
                Projeto paralelo de Tuca, aka NewCode.

                Entende que bem como no dia a dia, entre os aceleros da vida, necessitamos de momentos introspectivos que possivelmente possam nos levar a um momento de reflexão e meditação.

                É assim que Tuca percebe o Prog Dark! 
                É essa a proposta que FLACK tem pra levar pra pista!



                        <br/><br/> GÊNEROS MUSICAIS: PROG DARK<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

             
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-container1">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send?phone=01519997027577" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"> <a href="mailto:e.arthursilva7@gmail.com"><img  id="wpp"src={Eml}/></a></div>
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

export default Fleck