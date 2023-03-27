import React from "react";
import Video from './capa.mp4'
import './photo.css'

function Photo (){

    

    return(
        <>
        
        <span id="introducao"><h1 id="pulse-talents">Pulse Talents</h1>
<p>Uma agência que foi criada através do amor pela música e a celebração à vida.
Conheça nosso casting de artistas logo abaixo</p></span>
        <div id="0"className="video-container">
        <video src={Video} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', }}></video>
        </div>
            
        </>
    )
}

export default Photo


