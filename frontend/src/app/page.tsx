

import styles from "./page.module.css";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {Button} from "@nextui-org/react";
import ModalForm from "./components/ModalForm";

import type { Metadata } from 'next'
import * as React from "react";
import Gallery from './components/Gallery'



import "./components/FilterList";
import Litter from "./components/Litter";

const options = { next: { revalidate: 30 } };

const PAGE_META_DATA = `*[_type == "page"]{
  title,
  description, 
  pageName,
  keywords,
 }`

const PAGE_DATA = `*[_type == "page"]{
  locations[]->{_id, locationName, published},
  slug->{},
  litters[]->{
    _id,
    description, 
    location[]->{
      locationName
    },
    soldOut,
    published,
    litterName,
    puppies[]->{
      description,
      currentlyAvailable,
      published,
      pomskyName,
      weight,
      female,
      image{
        asset->
      },
      backgroundImage{
        asset->
      },
      eyeColor,
      isPuppy,
      price
    }
  }
}`;

export async function generateMetadata(): Promise<Metadata> {
  const request = await client.fetch<SanityDocument[]>(PAGE_META_DATA, {}, options);
  const data = await request[0];
  return {
    title: data.title,
    description: data.description ,
    keywords: 'Z'
  }
}



export default async function Home() {
  const request = await client.fetch<SanityDocument[]>(PAGE_DATA, {}, options);
  const data = await request[0];

  return(
    <>
      <div className={styles.page}>
        <main className={styles.main}>
        <div className="hero">
          <div className="hero-container">
            <h1>Ethical Dog Breeders</h1>
            <div className="established">
              <span></span>
              <span> Since 2017 </span>
              <span></span>
            </div>
            <p>
            We are focused on defending and promoting the health and well-being of the pomsky breed. We work hard for our pomsky pack to provide our families with healthy, happy, confident pomsky puppies. 
            </p>
            <div className="cta">
              <h2>Waitlist Currently Open</h2>
              <p>Make your home a puppies home by going through our process!</p>
              <Button size="lg"  color="primary" >
                Join Waitlist
              </Button> 
            </div>
          </div>
        </div>
        <Litter data={data}/>
        <Gallery images={["ppp-1", "ppp-2"]}/>
        <div className="adult-pomsky">
        <div className="ppp-container ppp-container-md ">
          <div className="ppp-flex-container">
              <div className="adult-pomsky-image">
                <img src="./images/ppp-adult.png" />
                
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
 
        <div className="ppp-adult-list">
          <div className="ppp-container ppp-container-md">
            <div className="ppp-headline">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  volutpat. 
            </div>
            <div className="ppp-flex-container u-pad">
              <div>
                <div className="ppp-flex-container ppp-a-pomsky ">
                  <div className="half-column">
                  { data.litters.map((l : any)=>{
                    
                    if(l.litterName === "Adult Pomskys" ){
                      return(
                        <>
                        {l.puppies.map((p : any, i : any) => {
                          console.log(p);
                            if(i % 2 === 0){
                              return (
                                <div className="ppp-dog-bio">
                                  <div className="ppp-dog-bio-image" style={{background: `url(${p.image !== null ? p.image.asset.url : null})`}}>
                                  </div>
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
                      </>
                      )
                    }
                    
                  })}
                  </div>
                  <div className="half-column">
                  { data.litters.map((l : any, i : any)=>{
                    if(l.litterName === "Adult Pomskys" && (i % 1 === 0)){
                      return(
                        <>
                        {l.puppies.map((p : any, i : any) => {
                     
                            if(i % 2 === 1){
                              return (
                                <div className="ppp-dog-bio">
                                  <div className="ppp-dog-bio-image" style={{background: `url(${p.image !== null ? p.image.asset.url : null})`}}>
                                  </div>
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
                      </>
                      )
                    }
                   })}
                  </div>
                </div>
              </div>
              <div>Y</div>
            </div>
          </div>
        </div>
        </section>
        </main>
      </div>

    </>
  );
}
