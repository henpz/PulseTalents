import React from "react";
import './genezyon.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './zyonlogo.png'
import Spot from '../img/spotify.png'


function Genezyon () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photogenezyon"></div>

            

            <div className="logogenezyon">
                <img src={Logo} />
            </div>

            <div className="genezyonsobre">

            

                <h1>
                Genezyon começou sua carreira precoce como DJ aos 15 anos de idade, tocando Miami Bass em vinil , migrando para o Drum Bass  adquirindo uma experiência musical nas Pickp`s .
   Apaixonado por música  sempre buscou tracks marcantes  inspirado em tambores Xamãs Indígenas, e de produtores como Ryanosaurus, Alchemy circle, Minimal Criminal,Tijah, Fábio Leal. Lançando em setembro de 2017 o projeto já possui tocando Progressive Dark é a certeza da apresentação  do melhor dessa vertente, com batidas de grave pesados e que possibilitam mixagens e experiências transcendentais.
                        <br/><br/> GÊNEROS MUSICAIS: PROG DARK<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

              

             
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-genezyon">

                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/genezyon/" ><img id="wpp"src={Ig}/></a></div>
                  

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

export default Genezyon