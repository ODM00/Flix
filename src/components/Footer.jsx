import React from 'react';
import '../css/estilos.css';
import LogoAluraFlix from '../img/LogoFooter.png';

const Footer = () => {
    return (
        <footer>
            <div className=''>
                <img src={LogoAluraFlix} alt="Logo AluraFlix" />
            </div>
            
            {/* Información adicional en el pie de página */}
            <div className="informacion-adicional">
                <p>© Desarrollado por: Oscar D. Polo M. 2024</p>
                {/* Enlaces a GitHub y LinkedIn */}
                <div>
                    <a href="https://github.com/ODM00?" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span> | </span>
                    <a href="https://www.linkedin.com/in/oscar-polo-morelo-749a67236//" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer;
