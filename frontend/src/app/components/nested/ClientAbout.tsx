'use client';

import styles from "../../page.module.css";

import { useEffect } from "react";
import * as React from "react";
// import Gallery from './components/Gallery'
import { ILitter, IPuppy } from '../../interfaces/interfaces'
import Hero from "../Hero";

import Litter from "../Litter";
import Inclusions from "../Inclusions";


import { useContext } from 'react';
import PomskyContext from '../../store/pomsky-context';


export default function ClientAbout() {
// const request = (await client.fetch<SanityDocument[]>(PAGE_DATA_QUERY, {}, QUERY_OPTIONS)).filter(p=>p.title==="Home");
// const data = await request[0];
const { litters, pages } = useContext(PomskyContext);


  return(
    <>
        <div className={styles.page}>
            <main className={`${styles.main} about-us` }>
              <div className="about-us-hero">
                   HERO
              </div>
              <div className="container">
                <section>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum dolores eveniet vero maxime, expedita necessitatibus provident iure non odio voluptate, suscipit magnam quisquam? Dolore eligendi provident hic laboriosam impedit!</p>
                </section>
                <section>
                    <h3>
                        Previous Litters
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum dolores eveniet vero maxime, expedita necessitatibus provident iure non odio voluptate, suscipit magnam quisquam? Dolore eligendi provident hic laboriosam impedit!
                    </p>
                </section>
                <section>

                    {  <Litter 
                        data={{litters: litters}}
                        litterTitle="All Pomsky Litters"
                        />
                    }
                </section>
       
              </div>
        
            </main>
        </div>

 
    </>
  );
}