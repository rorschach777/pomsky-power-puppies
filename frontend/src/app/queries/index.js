export const LITTER_PAGE_DATA = `*[_type == "page"]{
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
}`;
  