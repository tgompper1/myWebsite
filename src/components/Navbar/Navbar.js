import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
//import { Document} from 'react-pdf'
import Tess_Gompper_Resume_2022_08 from "./Documents/Tess_Gompper_Resume_2022_08.pdf";

export default function Navbar()  {
    const [click, setClick] =  useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    }, []);

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <nav className = 'navbar'>
                    <div className = 'navbar-container container'>
                        <Link to = '/' className='navbar-logo' onClick={closeMobileMenu}>
                            <h1 className= 'navbar-logo'>
                                Tess Gompper
                            </h1>
                        </Link>
                        <div className = 'menu-icon' onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars />}
                        </div>
                        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                            <li className = 'nav-item'>
                                <Link to='/about'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to='/projects'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to='/experience'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Experience
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                               <a className ='nav-links'
                                    href= {Tess_Gompper_Resume_2022_08}
                                    target='_blank'>
                                    Resume
                               </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}