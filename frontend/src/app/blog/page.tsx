
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
  youtube,
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
    console.log(data)
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className="ppp-container ppp-blog">
                    <header>
                        <h1>Recent News</h1>
                        <h2>Recent Updates</h2>
                    </header>
                    {/* {data.map(c=>{return <div>X</div>})} */}


                    <div className="ppp-flex-container">
                        <div className="left">
                            { data.map((c, i)=>{
                                console.log(c.body.children);
                                const date = new Date(c.publishedAt);
                                const youtube = c.youtube === null ? false : c.youtube;  
                                return(
                                    <BlogEntry 
                                    src={c.image != undefined ? c.image.asset.url : ''}
                                    heading={c.heading}
                                    author={c.author}
                                    date={date.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}
                                    link={c.link}
                                    body={c.body}
                                    youtube={youtube}
                                    key={`blog-entry-${i+1}`}
                                />
                                );
                            })}
                        </div>
                        <div className="right">
                            
                        </div>

                    </div>

                  </div>
            </main>

        </div>


    );
}