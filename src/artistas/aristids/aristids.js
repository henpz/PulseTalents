import React from "react";
import './aristids.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './aristidslogo.png'



function Aristids () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photoaristids"></div>

            

            <div className="logoaristids">
                <img src={Logo} />
            </div>

            <div className="aristidssobre">

            

                <h1>
                Aristids aka Guilherme Carvalho, DJ profissional há mais de 10 anos, formado pela Over One DJs, também cursou produção de música eletrônica pela Anhembi Morumbi. Gui é fundador e CEO dos núcleos Dream ON & Elementare, além de organizar a Caribbean na grande BH. Ao longo dos anos adquiriu bagagem participando de eventos como Universo Paralello, E-Trip, High Paradise, Sonoora, além da maioria dos eventos do Sul de MG.
Sempre se adaptando aos line-ups, traz consigo mixagens precisas, transitando facilmente pelas diferentes ondas sonoras do psy-trance. Atualmente integrante da Pulse Talents, com muito groove, basslines dançantes, baterias percussivas e melodias psicodélicas, traz sempre novidades em seu case, prometendo colocar todos para dançar em qualquer dancefloor.

                        <br/><br/> GÊNEROS MUSICAIS: FULLON GROOVE<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

                <div id="midia-text">
             <h1 >CONFIRA ALGUMAS MÍDIAS DO ARTISTA</h1>
                </div>

             <div className="midiasaristids">
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771135859&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407827350&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1401253444&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/652657802&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/460295787&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/638218473&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             </div>
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-aristids">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send?phone=5519996938212" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/aristidsmusic/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://soundcloud.com/aristids" ><img  id="wpp"src={Sound}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://www.facebook.com/aristids.dj"> <img  id="wpp"src={Face}/></a></div>
                    <div className="wpp"> <a href=""><img  id="wpp"src={Eml}/></a></div>
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

export default Aristids