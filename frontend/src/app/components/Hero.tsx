"use client";

import { useEffect, PropsWithChildren } from "react";
import {Button, Link} from "@nextui-org/react";


const loadBackground = () => {
    const divs = document.querySelectorAll(".ppp-lazy-load");
    divs.forEach(c=>{
        const imageSrc = c.getAttribute("data-image-src");
        c.setAttribute("style", `background-image:url('${imageSrc}')`);
        c.classList.add('show');
    });
    
}


type Props = {
    dataImageSrc: string
}

const Hero = (props: PropsWithChildren<Props> ) => {
    useEffect(()=>{
        loadBackground();
    },[]);
    return(
        <div className="hero ppp-lazy-load hide" data-image-src={props.dataImageSrc} style={{backgroundImage: 'url()'}}>
          <div className="hero-container" >
            <h1>Ethical Dog Breeders</h1>
            <p>
            We are focused on defending and promoting the health and well-being of the pomsky breed. We work hard for our pomsky pack to provide our families with healthy, happy, confident pomsky puppies.
            </p>
            <div className="established">
              <span></span>
              <span> Since 2017 </span>
              <span></span>
            </div>
            <p>
            
            </p>
            <div className="cta">
              <h2>Waitlist Currently Open</h2>
              <p>Make your home a puppies home by going through our process!</p>
              <Button size="lg"  color="primary" >
                <Link  href="/contact"> Join Waitlist </Link>
              </Button> 
            </div>
          </div>
       
        </div>
    );
}

export default Hero;