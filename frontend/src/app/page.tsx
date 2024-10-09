

import styles from "./page.module.css";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {Button} from "@nextui-org/react";

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
    puppies[]->{
      description,
      currentlyAvailable,
      published,
      pomskyName,
      weight,
      image{
      asset->
      },
      eyeColor,
      puppy,
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
  console.log(data);
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
        </section>
        </main>
        <div className="ppp-form">
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" placeholder="Doe" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="example.email@gmail.com" />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="phone" placeholder="999-999-9999"/>
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea placeholder="I wanted to inquire to see the status of..." />
            </div>
            <div>
              <button >Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
