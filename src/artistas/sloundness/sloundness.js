import React from "react";
import './sloundness.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './slounlogo.png'
import Spot from '../img/spotify.png'
import Ytbe from '../img/youtube.png'



function Slound () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photoslound"></div>

            

            <div className="logoslound">
                <img src={Logo} />
            </div>

            <div className="sloundsobre">

            

                <h1>
                Sloundness, projeto criado no final de 2017 por Mateus Henrique, artista da agencia PULSE TALENTS, 
                após o término do programa ALUMNUS CONCERT, um estudo em conjunto liderado por Tuca aka NewCode, 
                que durou intensivos 6 meses em busca de conhecimentos junto a 
                discotecagem. Embora seja um novo projeto, não se trata de um novo DJ, Mateus já atuava na cena regional desde 2013 e com conhecimentos de produção, já possui suas tracks autorais lançadas por Gravadoras como "MUZENGA, G-MAFIA, BASS BOX RECORDINGS, DEEP BEAR RECORDINGS". Esse projeto conta com as vertentes (Tech house/Bass House), que traz a renovação da sonoridade “Low” nacional. Apresentando-se em eventos como a PURE Private e Inter Holi, Sloundness é a garantia da experiência em guiar grandes pistas na região.

                        <br/><br/> GÊNEROS MUSICAIS: TECH HOUSE AND BASS HOUSE<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

                <div id="midia-text">
             <h1 >CONFIRA ALGUMAS MÍDIAS DO ARTISTA</h1>
                </div>

             <div className="midiasslound">
             <iframe id="responsive" width="540" height="305" src="https://www.youtube.com/embed/TTWpFXRYEI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>             
             <iframe id="responsive" width="540" height="305" src="https://www.youtube.com/embed/qju1xEAygHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>             
             <iframe id="responsive" width="540" height="305" src="https://www.youtube.com/embed/oop6Twqlzr4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>             
             <iframe id="responsive" width="540" height="305" src="https://www.youtube.com/embed/92Y7Gl9PowE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe id="responsive" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1423123666&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe id="responsive" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1319630044&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

             </div>

            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-slound">

                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/sloundnessmusic/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://soundcloud.com/sloundnessdj" ><img  id="wpp"src={Sound}/></a></div>
                    
                    <div className="wpp"> <a target="_blank" href="https://www.facebook.com/Sloundness"> <img  id="wpp"src={Face}/></a></div>
                    <div className="wpp"> <a href="mailto:sloundnessdj@gmail.com"><img  id="wpp"src={Eml}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://open.spotify.com/artist/3FgEetmGyZWsRqAMJUxLTr"><img  id="wpp"src={Spot}/></a></div>

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

export default Slound