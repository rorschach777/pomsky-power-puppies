import styles from "../page.module.css";
import ContactForm from '../components/Form';
import Inclusions from "../components/Inclusions";

export default async function Page() { 
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className="contact-hero">
                    <div className="ppp-container">
                        <div className="ppp-flex-container">
                            <div className="contact-hero-cta">
                                <h1>Contact Us Today</h1>
                                <h2>Request more information to become a Pomsky Parent</h2>
                                <div className="ppp-contact-methods">
                                <div>
                                    <h3>
                                        Address
                                    </h3>
                                    <h4>
                                        Spring City, Pennsylvania - United States
                                    </h4>
                        
                                </div>
                                <div>
                                    <h3>
                                        Hours
                                    </h3>
                                    <h4>
                                        Call and Facetime Monday - Saturday: 11 AM - 9 PM
                                        Text Anytime -
                                    </h4>
                    
                                </div>
                                <div>
                                        <h3>
                                            Phone:
                                        </h3>
                                        <span>
                                        You may call or text us at (610) 800-0012. If we do not answer please leave a message in order to receive a callback.
                                        </span>
                                    </div>
                                </div>
                                <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12193.879166490753!2d-75.55528772109268!3d40.17635728681092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c68fc91e1fe263%3A0xd02713ce92f2d098!2sSpring%20City%2C%20PA%2019475!5e0!3m2!1sen!2sus!4v1728926724970!5m2!1sen!2sus" width="500" height="300"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div>
                                <div className="contact-form-container">
                                    <div>
                                        <header>
                                            <h1>Request More Information</h1>
                                            <span>Start the process to get on our waitlist.</span>
                                        </header>
                                    </div>
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Inclusions />
            </main>
        </div>


    );
}