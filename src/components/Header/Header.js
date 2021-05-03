import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    function onClickMenu() {
        document.getElementById("menu").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");

        document.getElementById("menu-bg").classList.toggle("change-bg");
    }

    return (
        <div style={{ height: '120px', backgroundColor: '#072936' }}>
            <div className="text-right mr-5">
                <div className="pb-2 pt-2">
                    <Link to={{ pathname: 'https://www.linkedin.com/in/dukul-howlader-mohin-833172205/' }} target="_blank" className="socialIconStyle" ><FontAwesomeIcon className="iconSize" icon={faLinkedinIn} /></Link>
                </div>
                <div className="pb-2">
                    <Link to={{ pathname: "https://github.com/DukulH" }} target="_blank" className="socialIconStyle"><FontAwesomeIcon className="iconSize" icon={faGithub} /></Link>
                </div>
                <div className="pb-2">
                    <Link to={{pathname: "mailto:dukul.howlader30@gmail.com"}} target="_blank" className="socialIconStyle"><FontAwesomeIcon className="iconSize" icon={faEnvelope} /></Link>
                </div>
            </div>
            <div id="menu-bar">
                <div id="menu" onClick={onClickMenu}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <ul className="navigation" id="nav">
                    <li className="navItem"><a className="navLinkStyle" href="/home">Home</a></li>
                    <li className="navItem"><a className="navLinkStyle" href="#projects">Projects</a></li>
                    <li className="navItem"><a className="navLinkStyle" href="#blogs">Blog</a></li>
                    <li className="navItem"><a className="navLinkStyle" href="/resume">Resume</a></li>
                    <li className="navItem"><a className="navLinkStyle" href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="menu-bg" id="menu-bg"></div>
        </div>
    );
};

export default Header;