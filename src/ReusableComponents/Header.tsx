import React, { useState } from 'react';
import headerLogo from '../Images/judo.png';
import github from '../Images/github.png';
import menu from '../Images/menu.png';
import exit from '../Images/exit.png';

function Header() {

    let [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    function toggleMenu() {
        if (showMobileMenu)
            setShowMobileMenu(false);
        else 
            setShowMobileMenu(true);
    }

    return (
        <nav className="headerNav">
            <div className="headerNavDiv" id="headerNavDiv1" onClick={() => {window.location.href=`/`}}>
                <div className="headerNavInnerDiv">
                    <img className="headerLogo" src={headerLogo} alt="Judo logo" />
                </div>
                <div className="headerNavInnerDiv">
                    <h1 className="headerNavName">Erik Landaverde</h1>
                </div>
            </div>
            <div className="headerNavDiv headerNavDivP" onClick={() => {window.location.href=`/work`}}>
                <div className="headerNavInnerDiv">
                    <p className="navP">Work</p>
                </div>
            </div>
            <div className="headerNavDiv headerNavDivP" onClick={() => {window.location.href=`/`}}>
                <div className="headerNavInnerDiv">
                    <p className="navP">Bio</p>
                </div>
            </div>
            <div className="headerNavDiv headerNavDivP" onClick={() => {window.location.href=`/uses`}}>
                <div className="headerNavInnerDiv">
                    <p className="navP">Uses</p>
                </div>
            </div>
            <div className="headerNavDiv headerNavDivP" onClick={() => {window.location.href=`https://github.com/landaverde15`}}>
                <div className="headerNavInnerDiv">
                    <p className="navP"><img src={github}/> Source</p>
                </div>
            </div>
            <div className="hamburgerMenu">
                {showMobileMenu ? <img className="menuLogo" src={exit} alt="exit logo" onClick={() => toggleMenu()}/> : <img className="menuLogo" src={menu} alt="menu logo" onClick={() => toggleMenu()}/>}
            </div>
            {showMobileMenu ? 
                <div className="popupMenu">
                    <p onClick={() => {window.location.href=`/work`; setShowMobileMenu(false)}}>Work</p>
                    <p onClick={() => {window.location.href=`/`; setShowMobileMenu(false)}}>Bio</p>
                    <p onClick={() => {window.location.href=`/uses`; setShowMobileMenu(false)}}>Uses</p>
                    <p onClick={() => {window.location.href=`https://github.com/landaverde15`; setShowMobileMenu(false)}}>Source</p>
                </div> : 
            ""}
        </nav>
    );
}

export default Header;