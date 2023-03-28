import React, { useEffect } from "react";
import './team.css'
import Actionlogo from './TeamLogos/action.png'
import Aristidslogo from './TeamLogos/aristidslogo.png'
import Biomiclogo from './TeamLogos/biomiclogo.png'
import Blackmlogo from './TeamLogos/blackmlogo.png'
import Erilogo from './TeamLogos/erilogo.png'
import Flekelogo from './TeamLogos/flekelogo.png'
import Zyonlogo from './TeamLogos/zyonlogo.png'
import Lowlogo from './TeamLogos/lowtrecklogo.png'
import Newcodelogo from './TeamLogos/newcodelogo.png'
import Pialogo from './TeamLogos/pialogo.png'
import Sloundlogo from './TeamLogos/slounlogo.png'
import Soniclogo from './TeamLogos/soniclogo.png'
import Traxielogo from './TeamLogos/traxieslogo.png'
import Truelogo from './TeamLogos/truefellinglogo.png'
import Vicent from './TeamLogos/vicentt.png'
import Karin from './TeamLogos/karinlogo.png'
import { Link } from "react-router-dom";

function Team (){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    return(
        <>
        <h1 id="title3">PULSE TEAM</h1><h4 id="subtitle">conheça nossos artistas, e seus gêneros musicais</h4>
        <div id="01" className="artistas-container">
            <div className="generos-container">
                <span>Bass House</span>
                <span>Fullon Groove </span>
                <span>Fullon Night</span>
                <span>Prog Dark</span>
                <span>Prog Psytrance</span>
                <span>Psytrance </span>
                <span>Tech House</span>
            </div>
            <div className="grid-container">

            <div className="artista-box">
                       <Link to='./aristids'>
                    <div className="card">
                    <div id="ARISTIDS"className="img">
                    <img id="actionlogo"src={Aristidslogo} />
                    </div>

                   <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  

                </div>

                     <div className="artista-box">

                    <Link to='./newcode'>
                    <div class="card">
                    <div id="newcode"class="img">
                    <img id="actionlogo"src={Newcodelogo} />
                    </div>

                    <div className="vermais">
                    <span>VER MAIS</span> 
                    </div>
                    </div>
                    </Link>  
                    </div>

                    <div className="artista-box">
                    <Link to='./vicentzanicheli'>
                    <div className="card">
                    <div id="vicentt"className="img">
                        <img id="vicent" src={Vicent} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                    </div>  

                    <div className="artista-box">
                    <Link to='./pianesc'>
                    <div className="card">
                    <div id="pia"className="img">
                    <img id="actionlogo"src={Pialogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                    </div>

                    <div className="artista-box">
                    <Link to='./traxiesmoon'>
                <div className="card">
                    <div id="traxie"className="img">
                    <img id="actionlogo" src={Traxielogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    <Link to='./truefelling'>
                <div className="card">
                    <div id="toledo"className="img">
                    <img id="actionlogo" src={Truelogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    <Link to='./sonicsky'>
                <div className="card">
                    <div id="sonic"className="img">
                        <img id="actionlogo" src={Soniclogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    <Link to='./actionmind'>

                    <div  className="card">

                    <div id="action" className="img">
                         <img id="actionlogo"src={Actionlogo} />
                         
                    </div>
                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                    </Link>
                </div> 
                 
                <div className="artista-box">

                        <Link to='./blackmoon'>
                    <div className="card">
                    <div id="blackmoon"className="img">
                    <img id="blackmlogo"src={Blackmlogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    
                    <Link to='./genezyon'>
                <div className="card">
                    <div id="genezion"className="img">
                    <img id="genezionlogo"src={Zyonlogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>
                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    <Link to='./fleke'>
                <div className="card">
                    <div id="fleke"className="img">
                    <img id="actionlogo"src={Flekelogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>
                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    
                    <Link to='./eristtonC'>
                    <div  className="card">

                    <div id="eristton" className="img">
                    <img id="actionlogo"src={Erilogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                  <Link to='./lowtreck'>
                <div className="card">
                    <div id="lowtreck" className="img">
                    <img id="actionlogo"src={Lowlogo} />
                    </div>

                  <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>

                <div className="artista-box">    
                    <Link to='./biomic'>
                <div className="card">
                    <div  id="bionic" className="img">
                    <img id="actionlogo"src={Biomiclogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>
                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    <Link to='./slondness'>
                <div className="card">
                    <div id="sloundness" className="img">
                    <img id="actionlogo"src={Sloundlogo} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>

                <div className="artista-box">
                    <Link to='./karin'>
                <div className="card">
                    <div id="karin" className="img">
                    <img id="actionlogo"src={Karin} />
                    </div>

                    <div className="vermais">
                       <span>VER MAIS</span> 
                    </div>

                    </div>
                       </Link>  
                </div>


            </div>
            
        </div>
        </>
    )
}

export default Team