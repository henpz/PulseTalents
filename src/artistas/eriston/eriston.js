import React from "react";
import './eriston.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './erilogo.png'
import Ytbe from '../img/youtube.png'



function Eriston () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photoeriston"></div>

            

            <div className="logoeriston">
                <img src={Logo} />
            </div>

            <div className="eristonsobre">

            

                <h1>
                ÈristtonC é considerado um dos principais nomes em ascensão da música eletrônica no interior paulista e tem papel fundamental como figura irreverente e enérgica no processo de inserção deste estilo no mercado local.

Recém convidado a fazer parte do casting de djs da Pulse Talents , o artista tem se tornado uma referência nas transições entre Tech House e Techno Melodic, aplicando seus sentimentos através dos acordes contínuos, synths e melodias progressivas junto àquele som introspectivo cheio de harmonias.

Já tendo se apresentado em algumas das maiores e mais reconhecidas casas noturnas de sua região, onde dividiu palco com artistas como Yves V, Samhara  e Felguk, está expandindo seu raio de atuação pelo sul de Minas e litoral Paulista despertando admiração e fascinação através da sua música.

                        <br/><br/> GÊNEROS MUSICAIS: FULLON GROOVE<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

                <div id="midia-text">
             <h1 >CONFIRA ALGUMAS MÍDIAS DO ARTISTA</h1>
                </div>

             <div className="midiaseriston">
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/989610616&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1388401858&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118329576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1097268808&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/502400583&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/756704695&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             </div>
             

            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-eriston">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send/?phone=019993172371&text&type=phone_number&app_absent=0" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/eristtonc/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://soundcloud.com/djeristtonc" ><img  id="wpp"src={Sound}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://www.youtube.com/@eristtonc6163"> <img  id="wpp"src={Ytbe}/></a></div>
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

export default Eriston