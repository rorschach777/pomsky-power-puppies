import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
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

export async function generateMetadata() {
    return await pageMeta({query : PAGE_META_DATA, pageName : "Family"})
  }

export default async function Page() { 

    const request = (await client.fetch(PAGE_DATA_QUERY, {}, QUERY_OPTIONS)).filter(p=>p.title==="Family");
    const data = await request[0];

    return(
        <div>X</div>
    );
}