'use client';


import styles from "../../page.module.css";

import { useEffect } from "react";
import * as React from "react";
// import Gallery from './components/Gallery'
import { ILitter, IPuppy } from '../../interfaces/interfaces'
import Hero from "../Hero";



import Litter from "../Litter";
import Inclusions from "../Inclusions";

import PageMeta from '../PageMeta';
import { useContext } from 'react';
import PomskyContext from '../../store/pomsky-context';


export default function ClientHome() {
 // const request = (await client.fetch<SanityDocument[]>(PAGE_DATA_QUERY, {}, QUERY_OPTIONS)).filter(p=>p.title==="Home");
  // const data = await request[0];
const { litters, availablePuppies, pages } = useContext(PomskyContext);
const filteredLitters: ILitter[] = litters.filter(l => l.isHomepage);


const homepage = pages.find(p => p.title === 'Home');

const createAdultList = () => {
    const adultPomskys : ILitter[] = litters.filter(l=> l.litterName == "Adult Pomskys");
 return (
            <div className="ppp-adult-list">
            <div className="ppp-container ppp-container-md">
                <div className="ppp-headline">
                Healthy, Happy, Confident Pomskies!
                </div>
                <div className="ppp-flex-container u-pad">
                <div>
                    <div className="ppp-flex-container ppp-a-pomsky ">
                    <div className="half-column">
                    
                    { adultPomskys.map((l : ILitter, i : number)=>{
        
                        if(l.litterName  === "Adult Pomskys" ){
                        return(
                        <div key={`left-col-${i}`}>
                            {l.puppies.map((p : IPuppy , i : number ) => {
                    
                                if(i % 2 === 0){
                                return (
                                    <div className="ppp-dog-bio" key={`${l.litterName}-dog-bio-${i}`}>
                                    <img 
                                        alt={`Hi my name is ${p.pomskyName}`}
                                        className="ppp-dog-bio-image"  
                                        src={`${p.image !== null ? p.image.asset.url : null}`} 
                                        loading="lazy" 
                                        width="55"
                                        height="55"
                                        />
                                    <div className="ppp-dog-bio-text">
                                        <span>{p.pomskyName}</span>
                                        <p>
                                        {p.description}
                                        </p>
                                    </div>
                                    </div>
                                );
                                }
                            })}
                        </div>
                        )
                        } else {
           
                        }
                        
                    })}
                    </div>
                    <div className="half-column">
                    {  adultPomskys.map((l : ILitter, i : number)=>{
        
                    return(
                            <div  key={`right-col-${i}`}>
                            {l.puppies.map((p : IPuppy, puppyIndex) => {
                        
                                if(puppyIndex & 1){
                                return (
                                    <div className="ppp-dog-bio" key={`${l.litterName}-dog-bio-${puppyIndex}`} >
                                    <img className="ppp-dog-bio-image"  
                                    alt={`Hi my name is ${p.pomskyName}`}
                                    src={`${p.image !== null ? p.image.asset.url : null}`}
                                    loading="lazy"
                                        width="55"
                                        height="55"
                                    />
                                    <div className="ppp-dog-bio-text">
                                        <span>{p.pomskyName}</span>
                                        <p>
                                        {p.description}
                                        </p>
                                    </div>
                                    </div>
                                );
                                }
                            })}
                        </div>
                        )
                    })}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    
}

useEffect(()=>{

    createAdultList();

},[litters])


  return(
    <>
      <PageMeta title={homepage?.metaTitle} description={homepage?.metaDescription} />
      <div className={styles.page}>
        <main className={styles.main}>
        <Hero 
          h1="Ethical Dog Breeders"
          mainMessage="We are focused on defending and promoting the health and well-being of the pomsky breed. We work hard for our pomsky pack to provide our families with healthy, happy, confident pomsky puppies."
          contactForm={true}
          />
        {  <Litter 
            data={{litters: filteredLitters}}
            litterTitle="Recent Pomsky Litters"
            />
        }
  
        {/* <Gallery images={["ppp-1", "ppp-2", "ppp-3"]}/> */}
        <div className="adult-pomsky">
        <div className="ppp-container ppp-container-md ">
          <div className="ppp-flex-container">
              <div className="adult-pomsky-image">
                <img alt="Happy, Healthy, Pomsky Companions" loading="lazy" src="./images/ppp-adult.webp"/>
              </div>
              <div className="adult-pomsky-text">
                <span>
                  Meet Some of Our
                </span>
                <span>
                  Adult Pomskys
                </span>
              </div>
            </div>
          </div>
        </div>
        <section>
 
        { litters.length > 0 ? createAdultList() : null }
        </section>
        <Inclusions/>
        </main>
      </div>

    </>
  );
}