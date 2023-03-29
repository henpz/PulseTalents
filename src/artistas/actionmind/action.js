import React from "react";
import './action.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Face from '../img/face.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './action.png'




function Action () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photoaction"></div>

            

            <div className="logoaction">
                <img src={Logo} />
            </div>

            <div className="actionsobre">

            

                <h1>O projeto formado por Vincent Zanicheli e Leo Biomic, vem ganhando espaço nos eventos da sua região.
                     Trazendo um Fullon Groove com muita psicodelia e sempre passando o que o trance tem de melhor. O projeto já inicia seus passos na produção, trazendo toda a sua identidade para a vertente  fazendo a pista interagir e vibrar a cada música criando uma história memoravel em cada apresentação.
                        <br/><br/> GÊNEROS MUSICAIS: FULLON GROOVE<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

                <div id="midia-text">
             <h1 >CONFIRA ALGUMAS MÍDIAS DO ARTISTA</h1>
                </div>

             <div className="midiasaction">
             <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/716110990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             </div>
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-container1">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send?phone=01519997027577" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/actionmind_/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://soundcloud.com/action_mind" ><img  id="wpp"src={Sound}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://www.facebook.com/ActionMindPsyTrance"> <img  id="wpp"src={Face}/></a></div>
                    <div className="wpp"> <a href="mailto:https://soundcloud.com/action_mind;"><img  id="wpp"src={Eml}/></a></div>
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

export default Action