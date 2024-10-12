import './Footer.css';
import Logo from './Logo';
const Footer = () => {
    return (
        <footer>
            <div className="ppp-container">
                <div >
                    <div>
                        <Logo color="white"/>
                        <div>&copy; Pomsky Power Puppies 2024</div>
                    </div>
                
                    <div>
                        Follow us on Social Media
                        <ul>
                            <li>
                                <a  href="https://www.instagram.com/pomskypowerpuppies/" target="_blank" >
                                    <img src="./images/icons/instagram.svg" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/PomskyPowerPuppies/" target="_blank" >
                                    <img src="./images/icons/facebook.svg" />
                                </a>
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;