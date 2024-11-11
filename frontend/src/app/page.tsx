

import styles from "./page.module.css";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {pageMeta, PAGE_META_DATA} from './utils/page-meta';
import { Metadata } from "next";
import * as React from "react";
// import Gallery from './components/Gallery'
import { ILitter, IPuppy } from './types/index'
import Hero from "./components/Hero";


import "./components/FilterList";
import Litter from "./components/Litter";
import Inclusions from "./components/Inclusions";
import {QUERY_OPTIONS} from './queries/index'


export async function generateMetadata(): Promise<Metadata> {
  return await pageMeta({query : PAGE_META_DATA, pageName : "Home"})
}


const PAGE_DATA_QUERY = `*[_type == "page"]{
  locations[]->{_id, locationName, published},
  slug->{},
  title,
  litters[]->{
    _id,
    description, 
    litterParents,
    publishedAt,
    published,
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
      eyeColor-> {
      color
      },
      isPuppy,
      showPrice,
      price
    }
  }
}`

export default async function Home() {
  const request = (await client.fetch<SanityDocument[]>(PAGE_DATA_QUERY, {}, QUERY_OPTIONS)).filter(p=>p.title==="Home");
  const data = await request[0];

  return(
    <>
      <div className={styles.page}>
        <main className={styles.main}>
        <Hero />
        <Litter data={data}/>
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
 
        <div className="ppp-adult-list">
          <div className="ppp-container ppp-container-md">
            <div className="ppp-headline">
             Healthy, Happy, Confident Pomskies!
            </div>
            <div className="ppp-flex-container u-pad">
              <div>
                <div className="ppp-flex-container ppp-a-pomsky ">
                  <div className="half-column">
                  
                  { data.litters.map((l : ILitter )=>{
                    <div>{l.litterName}</div>
                    if(l.litterName  === "Adult Pomskys" ){
                      return(
                        <>
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
                      </>
                      )
                    }
                    
                  })}
                  </div>
                  <div className="half-column">
                  { data.litters.map((l : ILitter)=>{
                 
                    if(l.litterName === "Adult Pomskys" ){
                      return(
                        <>
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
                      </>
                      )
                    }
                   })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <Inclusions/>
        </main>
      </div>

    </>
  );
}
