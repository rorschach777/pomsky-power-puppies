
import Image from "next/image";
import styles from "./page.module.css";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import PuppyCard from './components/PuppyCard';


const POSTS_QUERY = `*[
  _type == "pomsky"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, pomsky_name, currently_available,price, weight, eyeColor, description}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const pomskys = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {pomskys.map((c)=>{return(
          <div>
           <PuppyCard 
              name={c.pomsky_name}
              price={c.price} 
              weight={c.weight} 
              description={c.description}
              available={c.currently_available}
              />
    
          </div>
        )})}
      </main>
     
    </div>
  );
}
