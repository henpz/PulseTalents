import React from "react";
import './footer.css'
 import Eml from '../Footer/eml.png'
 import Wpp from '../Footer/wpz.png'
 import Ig from '../Footer/instag.png'
import Logopulse from '../Header/logohere.png'

function Footer (){
    return(
        <>
        <footer>
        <div id="03" className="fundo1">
            
           
       <div className="assinatura">
       <span><img id='logo-footer'src={Logopulse} /></span>

       </div>

        <div className="wpp-container">
                <div className="wpp-block">
            <a href="https://api.whatsapp.com/send/?phone=5519996096719&text&type=phone_number&app_absent=0" target ="_blank"> <img id="wpplogo"  src={Wpp}/>  <h1>55 19 99609-6719</h1> </a>
                 </div>
        </div>

            <div id="logos">

              <a href="mailto:pulsetalents@gmail.com" target ="_blank"> <img id="editar" src={Eml}  /></a> 

               <a href="https://www.instagram.com/pulse_talents/?utm_medium=copy_link" target ="_blank"> <img id="editar" src={Ig} /></a>

             </div>

       <div className="direitos">
       
       <span>Pulse Talents© 2023 Todos os Direitos Reservados. <br/><br/> POWERED BY: <a href="https://www.linkedin.com/in/henriquepizzi/"> CARLOS HENRIQUE PIZZI</a></span>
       </div>




           </div>
        </footer>
        </>
    )
}

export default Footer