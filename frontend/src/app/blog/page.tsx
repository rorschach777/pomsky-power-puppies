
import styles from "../page.module.css";
import BlogEntry from '../components/BlogEntry';
const options = { next: { revalidate: 30 } };

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import {pageMeta, PAGE_META_DATA} from '../utils/page-meta';
import type { Metadata } from 'next';



const PAGE_DATA = `*[_type == "post"]{
  title,
  slug,
  heading,
  link,
  author,
  publishedAt,
  image{
    asset->{
      url
    }
  },
  body[] {
    children[]{
      text
    }
  }
}`;

export async function generateMetadata(): Promise<Metadata> {
    return await pageMeta({query : PAGE_META_DATA, pageName : "Blog"})
}


export default async function Page() { 
    const data = await client.fetch<SanityDocument[]>(PAGE_DATA, {}, options);
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className="ppp-container ppp-blog">
                    <header>
                        <h1>Pomsky News</h1>
                        <h2>Lorem Ipsum Dolor</h2>
                    </header>
                    {/* {data.map(c=>{return <div>X</div>})} */}
                    { data.map((c : any,i : number)=>{
                        console.log(c.body[0].children)
                        return(
                            <BlogEntry 
                            src={c.image.asset.url}
                            heading={c.heading}
                            author={c.author}
                            date={c.publishedAt}
                            link={c.link}
                            body={c.body[0].children[0].text}
                        />
                        );
                    })}
         
                
            
                </div>
            </main>

        </div>


    );
}