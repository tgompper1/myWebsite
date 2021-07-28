import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import{
    FaLinkedin,
    FaGithub,
    FaCodepen
} from 'react-icons/fa';
import {  HiOutlineMail } from 'react-icons/hi';

function Footer() {
    return (
        <div className = 'footer-container'>
            <section className = 'contact-links'>
                <div className = 'contact-links-wrap'>
                    <div className='footer-logo'>
                        <Link to ='/' className='contact-logo'>
                            <h1 className = 'navbar-logo'>
                                TessGompper 
                            </h1>
                        </Link>
                    </div> 
                    <small className='website-rights'>
                        Tess Gompper © 2021
                    </small>
                    <div className='contact-icons'>
                        <Link
                            className='contact-icon-link'
                            to={'//www.linkedin.com/in/tess-gompper-433222190'}
                            target='_blank'
                            aria-label='LinkedIn'
                            >
                                <FaLinkedin/>
                        </Link>
                        <Link
                            className='contact-icon-link'
                            to={'//github.com/tgompper1'}
                            target='_blank'
                            aria-label='GitHub'
                            >
                                <FaGithub/>
                        </Link>
                        <Link
                            className='contact-icon-link'
                            to={'//codepen.io/tgompper'}
                            target='_blank'
                            aria-label='CodePen'
                            >
                                <FaCodepen/>
                        </Link>
                        {/* <Link
                            className='contact-icon-link'
                            to={'//codepen.io/tgompper'}
                            target='_blank'
                            aria-label='Email'
                            >
                                <HiOutlineMail/>
                        </Link> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;