import styles from "../page.module.css";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {QUERY_OPTIONS} from '../queries/index';
import ContactHero from "../components/ContactHero";
import Litter from "../components/Litter";
import Inclusions from "../components/Inclusions";
import { Metadata } from "next";
import {pageMeta, PAGE_META_DATA} from '../utils/page-meta';
import '../contact/contact.css';

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


export async function generateMetadata(): Promise<Metadata> {
    return await pageMeta({query : PAGE_META_DATA, pageName : "Home"})
}
  
export default async function Page() { 
    
    const request = (await client.fetch<SanityDocument[]>(PAGE_DATA_QUERY, {}, QUERY_OPTIONS)).filter(p=>p.title==="Home");
    const data = await request[0];
  
    return (

        <div className={styles.page}>
            <main className={styles.main}>
                <ContactHero />
                <Litter data={data}/>
                <Inclusions/>
            </main>
        </div>


    );
}