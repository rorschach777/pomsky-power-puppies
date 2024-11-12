import ContactForm from '../components/Form';
const ContactHero = () => {
    return(
        <div className="contact-hero" id="contact-us">
            <div className="ppp-container">
                <div className="ppp-flex-container">
                    <div className="contact-hero-cta">
                        <h1>Contact Us</h1>
                        <h2>Let&apos;s start by getting some basic information.</h2>
                        <div className="ppp-contact-methods">
                        <div>
                            <h3>
                                Address:
                            </h3>
                            <h4>
                                Edmeston, New York & Spring City, Pennsylvania
                            </h4>
                        </div>
                        <div>
                            <h3>
                                Hours:
                            </h3>
                            <h4>
                                Monday - Saturday: 11AM - 9PM
                            </h4>
                        </div>
                        <div>
                            <h3>
                                Phone:
                            </h3>
                            <span>
                                You may call us during our business hours, or text us anytime at (610) 800-0012. If we do not answer please leave a message and we will respond to you as soon as possible.
                            </span>
                        </div>
                        </div>
                        <div className="ppp-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12193.879166490753!2d-75.55528772109268!3d40.17635728681092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c68fc91e1fe263%3A0xd02713ce92f2d098!2sSpring%20City%2C%20PA%2019475!5e0!3m2!1sen!2sus!4v1728926724970!5m2!1sen!2sus" width="500" height="300"  loading="lazy" ></iframe>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <div>
                            <header>
                                <h1>Start here to become a Pomsky Owner</h1>
                                <span>Start the process by providing us with some basic information and if there is a specific puppy that your are interested in.</span>
                                <span>We also offer transport services through Flight Nanny if you live far from your future pup. Exact costs vary based on your location and exact needs.</span>
                            </header>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactHero;