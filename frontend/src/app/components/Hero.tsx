"use client";

import {Button, Link} from "@nextui-org/react";
import LazyBackground from "./LazyBackground";
import {PropsWithChildren} from 'react';


type Props = {
  h1 : string,
  mainMessage : string,
  contactForm: boolean
}

const Hero = (props : PropsWithChildren<Props>) => {
    return(
      <>
          <div 
            className="hero"
          >
          <LazyBackground/>
  
          <div className="hero-container" >
            <h1>{props.h1}</h1>
            <p>
                {props.mainMessage}
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