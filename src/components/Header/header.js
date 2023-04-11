import React from "react";
import './header.css';
import Menuresp from './iconemenu.png'
import Logo from './logohere.png'
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Header (){

    
    const [icone, setIcone] = useState(Menuresp)
    const [open, setOpen] = useState(false);
    const menuMobile = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    const handleClick = event => {
      setOpen(!open);
      event.stopPropagation();
      const icon = document.querySelector('.iconemobile');
      icon.classList.toggle('active');
    };
  
    useEffect(() => {
      const handleWindowClick = event => {
        if (!menuMobile.current.contains(event.target)) {
          setOpen(false);
        }
      };
      window.addEventListener('click', handleWindowClick);
      return () => {
        window.removeEventListener('click', handleWindowClick);
      };
    }, []);

  
    return(
        <div>
           <header>
            <nav className="navbar">
                <div className="name"><Link to='../'><img src={Logo} /></Link></div>
                    <ul id="menu-h" >
                        
                    <HashLink smooth to="/#0" activeClassName="active"><li className="navitem">HOME</li></HashLink>

                        
                      <HashLink smooth to="/#02" activeClassName="active"><li className="navitem">SOBRE</li></HashLink>

                      <HashLink smooth to="/#01" activeClassName="active"><li className="navitem">EQUIPE</li></HashLink>


                      <HashLink smooth to="/#03" activeClassName="active"><li className="navitem">CONTATOS</li></HashLink>

                    <div className="iconemobile" onClick={handleClick}  style={{ display: screenWidth < 768 ? 'block' : 'none' }}>
                        
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    </div>
                    </ul>
                    
            </nav>

            <div className="mobilemenu" ref={menuMobile} style={{ display: open ? 'block' : 'none' }}>  
                
                <ul id="menu-h" >
                        
                <ul id="menu-h" >
        <HashLink smooth to="/#0" activeClassName="active"><li>HOME</li></HashLink>
        <HashLink smooth to="/#02" activeClassName="active"><li>SOBRE</li></HashLink>
        <HashLink smooth to="/#01" activeClassName="active"><li>EQUIPE</li></HashLink>
        <HashLink smooth to="/#03" activeClassName="active"><li>CONTATOS</li></HashLink>
    </ul>
    
                </ul>
            </div>

           </header>

        </div>
    )
}

export default Header