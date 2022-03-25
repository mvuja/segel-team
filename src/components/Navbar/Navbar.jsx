import React, { useState, useEffect } from "react";
import './_navbar.scss';
import logo from '../../Assets/logo.png'

const Navbar = () => {
    
    const [mobileMenu, setMobileMenu] = useState('')

    const mobileMenuClick = () => {
        if(!mobileMenu){
            setMobileMenu('active')
        }else{
            setMobileMenu('')
        }
    }

    useEffect(() => {
      const navLinks = document.querySelectorAll('.nav-links li a')
      navLinks.forEach(el => {
          el.addEventListener('click', () => {
            setMobileMenu('')
          })
      })
    }, [])

    return (
        <nav className='nav-header'>
            <div className={`hamburger ${mobileMenu}`} onClick={mobileMenuClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${mobileMenu}`}>
                <li className="underline"><a href="#">About Us</a></li>
                <li className="underline"><a href="#">Gallery</a></li>
                <li className="underline"><a href="#">Crew</a></li>
                <li className="underline"><a href="#">Kontakt</a></li>
            </ul>
            <div className="nav-logo"><img src={logo} alt="Logo" /></div>
        </nav>
    )
}

export default Navbar