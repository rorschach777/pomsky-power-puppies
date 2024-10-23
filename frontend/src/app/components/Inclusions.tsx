import {Button, Link, Image} from "@nextui-org/react";
import './Inclusion.css';
const Inclusions = () => {
    return (
        <section className="ppp-inclusions">
            <div className=" ppp-container ">
                <h2>Puppy Inclusions</h2>
                <div className="ppp-flex-container ">
                    <div className="ppp-inclusion">
                        <Image alt="EMS | Neurological Stimulation" src="/images/icons/icon-1.svg" /> 
                        <h4>Neuroglial Stimulation</h4>
                        <p>
                        Properly done ENS provides the puppies with improved growth and development in their immune and cardiovascular systems, stress tolerance, and so much more. 
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link href="https://www.youtube.com/watch?v=WN93AiCx9Rc" aria-description="Watch a video that shows in detail some of the benefits of ENS" >Learn More</Link>
                        </Button>
                    </div>
                    <div className="ppp-inclusion">
                        <Image alt="We all need good puppy manners!" src="/images/icons/icon-2.svg"  /> 
                        <h4>Puppy Manners</h4>
                        <p>
                        Once our puppies begin to romp and play, they are introduced to puppy manners, a form of training using positive reinforcement and behavior redirecting. 
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link href="https://youtu.be/uQ99n2kSdhs?si=itmTMoDXELLHobyP" aria-description="We help give our puppies basic manners from their very first days" >Learn More</Link>
                        </Button>
                    </div>
                    <div className="ppp-inclusion">
                        <Image alt="Rest assured in your purchase with 30-Day Insurance" src="/images/icons/icon-3.svg"  /> 
                        <h4>30-Day Pet Insurance</h4>
                        <p>
                            Trupanian sponsors each puppy by providing each puppy with 30 days free pet insurance, excluding California and NY, as their state laws forbid this.
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link rel="" href="https://www.trupanion.com/" aria-description="Trupanian sponsors each puppy for 30-day free pet insurance - click here to learn more.">Learn More</Link>
                        </Button>
                    </div>
                    <div className="ppp-inclusion">
                        <Image  alt="We go above and beyond to keep your puppy healthy" src="/images/icons/icon-4.svg"  /> 
                        <h4>Health</h4>
                        <p>
                        Each puppy's contract includes our health guarantee. Still, we go above and beyond with our puppy's health by providing each puppy with a thorough vet health certificate. Any puppy traveling with our flight nanny receives a flight certificate. We raise our puppies in a clean, healthy home! Their health reflects this.
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link href="tel:6108000012" aria-description="Get in touch with us today by calling or texting" >Text or Call Today</Link>
                        </Button>
                    </div>
                </div>
            </div>
         
        </section>
    );
}
export default Inclusions;