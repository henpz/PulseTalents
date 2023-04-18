import React from "react";
import './low.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './lowtrecklogo.png'
import Spot from '../img/spotify.png'



function Low () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photolow"></div>

            

            <div className="logolow">
                <img src={Logo} />
            </div>

            <div className="lowsobre">

            

                <h1>
                Diego Treco, após uma longa carreira no Future prog, finalmente se encontra nas linhas dançantes e melódicas do Tech e Bass House, com seu mais novo projeto LOWTRECK!
                    Lançando super tracks como "I Love Coke" pela grande gravadora G Mafia e "Crazy Box" pela Muzenga, LOWTRECK mostra sua qualidade e profissionalismo ao lado de grandes produtores da vertente.
                    Com uma explosiva presença de palco aliada a mixagens precisas traz consigo a certeza de uma pista enérgica repleta de alegria.

                        <br/><br/> GÊNEROS MUSICAIS: TECH HOUSE AND BASS HOUSE<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

                <div id="midia-text">
             <h1 >CONFIRA ALGUMAS MÍDIAS DO ARTISTA</h1>
                </div>

             <div className="midiaslow">
             <iframe  src="https://open.spotify.com/embed/track/4bL7TPU5aeXyb7p6sEL97z?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            
             <iframe  src="https://open.spotify.com/embed/track/1U2bc3Q2Wi1UeSSmUCmk0z?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             <iframe  src="https://open.spotify.com/embed/track/1Ti8OsAszAD0AmYJj9DB4J?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </div>
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-low">

                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/lowtreck/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://soundcloud.com/lowtreck" ><img  id="wpp"src={Sound}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://www.facebook.com/lowtreckmusic"> <img  id="wpp"src={Face}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://open.spotify.com/artist/3bA3iTV9kAGYxcQaEIH4sr?si=DRsdSeQ1RXWBiFAvYSQO1Q&dl_branch=1&ltclid=2e2f31fc-bea0-4e8a-9d6e-b207f47160aa&nd=1"><img  id="wpp"src={Spot}/></a></div>
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

export default Low