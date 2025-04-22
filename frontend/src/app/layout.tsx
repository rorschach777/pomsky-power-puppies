import localFont from "next/font/local";
import "./globals.css";
import "./main.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Provider from './Provider'
import { GoogleTagManager } from '@next/third-parties/google';
// import PomskyContext from './store/pomsky-context';

import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import {IData, IAvailablePuppies, IPuppy } from "./interfaces/interfaces";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const QUERY_OPTIONS = { next: { revalidate: 30 } };

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





export default async function RootLayout({
  children}: Readonly<{
  children: React.ReactNode;
}>) {
  const request = (await client.fetch<SanityDocument[]>(PAGE_DATA_QUERY, {}, QUERY_OPTIONS)).filter(p=>p.title==="Home");
  const response : any = await request[0];
  const responseData : IData = await response;
  let availablePuppies : IPuppy[] = []; 

  responseData.litters.forEach(l => l.puppies.forEach(p => availablePuppies.push(p)));
  availablePuppies = availablePuppies.filter(p => p.currentlyAvailable === true);
 
  console.log(availablePuppies);
  return (
    <>
    {/* <PomskyContext.Provider value={{data: data}}>

    </PomskyContext.Provider> */}


          <html lang="en">
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER}`} />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Provider>
            <Header availablePuppies={availablePuppies}/>
            {children}
            <Footer/>
          </Provider>
        </body>
      </html>
    </>
  );
}
