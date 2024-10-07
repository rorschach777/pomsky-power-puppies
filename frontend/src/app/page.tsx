
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
        <div className="hero">Hero</div>
        <Litter data={data}/>
        <div className="gallery">Gallery</div>
        <div className="adult-pomsky">Adult Dogs</div>
        </main>
      
      </div>
    </>

  );
}
