import './Footer.css';
import Logo from './Logo';
import Image from 'next/image';
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
                                    <Image alt="Check us out on our instagram page" src="./images/icons/instagram.svg" loading="lazy"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/PomskyPowerPuppies/" target="_blank" >
                                    <Image alt="Check us out on facebook" src="./images/icons/facebook.svg" loading="lazy"/>
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