import React, { useState, useEffect } from "react";
import './_footer.scss';

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <p className="copy">© 2021. Segel-Team. Alle Rechte vorbehalten</p>
                <div className="social">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <ul className="footer-menu">
                    <li><a href="#">Impressum</a></li>
                    <li><a href="#">Datenschutz</a></li>
                    <li><a href="#">Rechtliches</a></li>
                    <li><a href="#">Copyright</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer