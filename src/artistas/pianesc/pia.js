import React from "react";
import './pia.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './pialogo.png'
import Spot from '../img/spotify.png'


function Pia () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photopia"></div>

            

            <div className="logopia">
                <img src={Logo} />
            </div>

            <div className="piasobre">

            

                <h1>
                Pianesc criado por Pedro Luiz Piacentini, esse
                    projeto que vem para trazer uma história
                    através das nuances musicais características do
                    Fullon Groove, utilizando os momentos certos
                    entre a psicodelia e a agressividade, levando a
                    pista no seu auge!!!
                    Integrante do duo Traxie's Moon, Pianesc busca
                    traçar uma história fora do convencional através
                    do seu sentimento individual, deixando no ar
                    uma atmosfera de que sempre haverá uma
                    próxima vez...
                    Residente do querido Pia'S Bar e tendo
                    participado do programa ALUMNUS CONCERT,
                    um estudo em conjunto liderado por Tuca aka
                    NewCode, adquiriu vasta experiência que
                    resulta em uma alucinante presença de palco
                    com set's explosivos envolvendo o público em
                    um verdadeiro show!!!
                        <br/><br/> GÊNEROS MUSICAIS: FULLON GROOVE<br/><br/>LOCALIZAÇÃO: LEME - SP
                </h1><br/>
                
            </div>

                <div id="midia-text">
             <h1 >CONFIRA ALGUMAS MÍDIAS DO ARTISTA</h1>
                </div>

             <div className="midiaspia">
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234754239&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             </div>
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-pia">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send/?phone=5519998392916&text&type=phone_number&app_absent=0" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/pianesc_music/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://soundcloud.com/pedro-piacentini-910690947" ><img  id="wpp"src={Sound}/></a></div>
                    <div className="wpp"> <a href="mailto:pedrolupiacentini@gmail.com"><img  id="wpp"src={Eml}/></a></div>

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

export default Pia