import React from "react";
import './newcode.css'
import Fundo from '../img/fundopulse.jpg'
import Wpp from '../img/wpz.png'
import Ig from '../img/instag.png'
import Ytbe from '../img/youtube.png'
import Sound from '../img/sound.png'
import Eml from '../img/eml.png'
import Logo from './newcodelogo.png'



function Newcode () {
    


    return(
        
        <>
        <div id="backNewcode">
            <div className="fotodefundo">
                <img id="imgautoral"src={Fundo} />
            </div>
            <div className="photonewcode"></div>

            

            <div className="logonewcode">
                <img src={Logo} />
            </div>

            <div className="newcodesobre">

            

                <h1> Release
                        🦉 NewCode 💥  Dj e produtor formado pela Academia Internacional de Música Eletrônica (AIMEC),  já passou por grandes palcos como ReveillOZ(SP) , E-trip(SP), Dream On(MG), Elementare(MG) e Terratronic(RJ) 🚀


                        Adepto da filosofia trance, cria através dos seus set's uma atmosfera de paz e harmonia, com picos de euforia e alegria capazes de conduzir o público a um momento único de movimentos através da dança.

                        Atualmente trabalhando em seu mais novo single "There is no Tomorrow", NewCode é, sem dúvida,  a garantia  de um mix do melhor que o psychedelic e o progressive trance têm a oferecer.
                        <br/><br/> GÊNEROS MUSICAIS: FULLON GROOVE AND PROG PSYTRANCE<br/><br/>LOCALIZAÇÃO: PIRASSUNUNGA - SP
                </h1><br/>
                
            </div>

                <div id="midia-text">
             <h1 >CONFIRA ALGUMAS MÍDIAS DO ARTISTA</h1>
                </div>

             <div className="midiasnewcode">
             <iframe id="responsive" width="480" height="350" src="https://www.youtube.com/embed/5g8cp71WuRU" title="NewCode DREAM ON 2022 AfterMovie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe id="responsive"width="480" height="350" src="https://www.youtube.com/embed/uCJNVDrFgAI" title="NewCode HighNature 2022 RJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe id="responsive"width="480" height="350" src="https://www.youtube.com/embed/Hq-jCzBxh00" title="Terratronic em Terras Gregas!!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe id="responsive"width="480" height="350" src="https://www.youtube.com/embed/umwbD12aG1U" title="ReveillOz #3 02/01/2017" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe id="responsive"width="480" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/263857031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             <iframe id="responsive"width="480" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/450896040&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
             </div>
            
             <div id="contato-title">
             <h1 >FAÇA CONTATO COM O ARTISTA</h1>
                </div>

                <div className="redes-container">

                    <div className="wpp"><a target="_blank" href="https://api.whatsapp.com/send/?phone=19996938212&text&type=phone_number&app_absent=0" ><img  id="wpp"src={Wpp}/></a></div>
                    <div className="wpp"><a target="_blank" href="https://www.instagram.com/newcodemusic/" ><img id="wpp"src={Ig}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://soundcloud.com/newcodemusic/" ><img  id="wpp"src={Sound}/></a></div>
                    <div className="wpp"> <a target="_blank" href="https://www.youtube.com/@newcodemusic9448"> <img  id="wpp"src={Ytbe}/></a></div>
                    <div className="wpp"> <a href="mailto:e_tucamoreira@yahoo.com.br;"><img  id="wpp"src={Eml}/></a></div>
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

export default Newcode