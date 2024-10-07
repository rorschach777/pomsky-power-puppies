
import Image from "next/image";
import styles from "./page.module.css";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import PuppyCard from './components/PuppyCard';
import { useReducer, useState} from 'react'

import type { Metadata } from 'next'
import * as React from "react";

import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";


import "./components/FilterList";
import Litter from "./components/Litter";

const options = { next: { revalidate: 30 } };

const PAGE_META = `*[_type == "page"]`;

const PAGE_DATA = `
*[_type == "litter" && defined(location) ]{ _id, litterName,  location[]->{location_name}, puppies[]->{pomsky_name, description, price, weight, eyeColor, image, female, currently_available}}
`

export async function generateMetadata(): Promise<Metadata> {
  const page_meta = await client.fetch<SanityDocument[]>(PAGE_META, {}, options);
  return {
    title: page_meta[0].title,
    description: page_meta[0].description,
    keywords: page_meta[0].keywords.map((k : any)=>{return k})
  }
}


export default async function Home() {


  const data = await client.fetch<SanityDocument[]>(PAGE_DATA, {}, options);
  
  console.log("PAGE DATA");

  return (
    <>

      <div className={styles.page}>
        <main className={styles.main}>
        <div className="hero">
          <div className="hero-container"></div>
        </div>
        <Litter data={data}/>
        <div className="gallery"></div>
        <div className="adult-pomsky">
        <div className="ppp-container ppp-container-sm ">
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
        <div className="ppp-adult-list">
          <div className="ppp-container ppp-container-md">
            <div className="ppp-headline">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  volutpat. 
            </div>
            <div className="ppp-flex-container u-pad">
              <div>
                <div className="ppp-flex-container ">
                  <div className="left">
                  <div className="ppp-dog-bio">
                    <div className="ppp-dog-bio-image">
                     </div>
                    <div className="ppp-dog-bio-text">
                      <span>Judas & Ester</span>
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      </p>
                    </div>
                  </div>
                  <div className="ppp-dog-bio">
                      <div className="ppp-dog-bio-image">
                      </div>
                      <div className="ppp-dog-bio-text">
                        <span>Judas & Ester</span>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                      </div>
                    </div>

                  </div>
                  <div className="right">
                    <div className="ppp-dog-bio">
                      <div className="ppp-dog-bio-image">
                      </div>
                      <div className="ppp-dog-bio-text">
                        <span>Judas & Ester</span>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                      </div>
                    </div>
                    <div className="ppp-dog-bio">
                      <div className="ppp-dog-bio-image">
                      </div>
                      <div className="ppp-dog-bio-text">
                        <span>Judas & Ester</span>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div>Y</div>
            </div>
          </div>
        </div>
        </main>
      </div>
    </>

  );
}
