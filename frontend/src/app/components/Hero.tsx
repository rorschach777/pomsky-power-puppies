"use client";

import {Button, Link} from "@nextui-org/react";
import LazyBackground from "./LazyBackground";


const Hero = () => {
    return(
      <>
          <div 
            className="hero"
          >
          <LazyBackground/>
  
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
              <h2>Puppies Currently Available </h2>
              <p>Make your home a puppy&apos;s home by going through our process! Let&apos;s start by getting some basic information. </p>
              <Button size="lg"  color="primary" >
                <Link  href="/contact"> Get Puppy Information </Link>
              </Button> 
            </div>
          </div>
        </div>
      </>
  
    );
}

export default Hero;