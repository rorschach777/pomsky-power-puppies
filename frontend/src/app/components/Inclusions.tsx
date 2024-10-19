import {Button, Link} from "@nextui-org/react";
import './Inclusion.css';
const Inclusions = () => {
    return (
        <section className="ppp-inclusions">
            <div className=" ppp-container ">
                <h2>Puppy Inclusions</h2>
                <div className="ppp-flex-container ">
                    <div className="ppp-inclusion">
                        <img src="/images/icons/icon-1.svg" /> 
                        <h4>Neuroglial Stimulation</h4>
                        <p>
                        Properly done ENS provides the puppies with improved growth and development in their immune and cardiovascular systems, stress tolerance, and so much more. 
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link href="https://www.youtube.com/watch?v=WN93AiCx9Rc" >Learn More</Link>
                        </Button>
                    </div>
                    <div className="ppp-inclusion">
                        <img src="/images/icons/icon-2.svg"  /> 
                        <h4>Puppy Manners</h4>
                        <p>
                        Once our puppies begin to romp and play, they are introduced to puppy manners, a form of training using positive reinforcement and behavior redirecting. 
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link href="https://youtu.be/uQ99n2kSdhs?si=itmTMoDXELLHobyP" rel="">Learn More</Link>
                        </Button>
                    </div>
                    <div className="ppp-inclusion">
                        <img src="/images/icons/icon-3.svg"  /> 
                        <h4>30-Day Pet Insurance</h4>
                        <p>
                        Properly done ENS provides the puppies with improved growth and development in their immune and cardiovascular systems, stress tolerance, and so much more. 
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link rel="" href="https://www.trupanion.com/" >Learn More</Link>
                        </Button>
                    </div>
                    <div className="ppp-inclusion">
                        <img  src="/images/icons/icon-4.svg"  /> 
                        <h4>Health</h4>
                        <p>
                        Trupanian sponsors each puppy by providing each puppy with 30 days free pet insurance, excluding California and NY, as their state laws forbid this.
                        </p>
                        <Button variant="bordered" color="secondary">
                            <Link href="tel:6108000012" >Text or Call Today</Link>
                        </Button>
                    </div>
                </div>
            </div>
         
        </section>
    );
}
export default Inclusions;