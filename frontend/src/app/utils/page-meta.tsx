import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const options = { next: { revalidate: 30 } };


interface IData {
    title: string, 
    description: string, 
    keywords: string[],

}

interface IParams  {
    query: string,
    pageName:  string
}


export const pageMeta = async ( params : IParams ) => {
    const request = await client.fetch<SanityDocument[]>(params.query, {}, options);
    const page = await request.filter(p=>p.title === params.pageName)[0];
    const data : IData = {
        title : page.metaTitle,
        description: page.description,
        keywords: page.keywords,
    }
    return data;
}

export const PAGE_META_DATA = `*[_type == "page"]{
    title,
    description, 
    metaTitle,
    keywords
}`

