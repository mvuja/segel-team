import './_footer.scss';
import twitter from '../../Assets/twitter.png'
import facebook from '../../Assets/facebook.png'

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <p className="copy">© 2021. Segel-Team. Alle Rechte vorbehalten</p>
                <div className="social">
                    <a href="https://twitter.com/" target="_blank">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} alt="Facebook" />
                    </a>
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