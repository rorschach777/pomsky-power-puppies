"use client";

import {Button, Link} from "@nextui-org/react";
import { lazy } from 'react';


const LazyBackground = lazy(()=> import('./LazyBackground.jsx'));


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
              <h2>Waitlist Currently Open</h2>
              <p>Make your home a puppies home by going through our process!</p>
              <Button size="lg"  color="primary" >
                <Link  href="/contact"> Join Waitlist </Link>
              </Button> 
            </div>
          </div>
        
        </div>
      </>
  
    );
}

export default Hero;