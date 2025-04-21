import React from 'react';
import { IData } from '../interfaces/interfaces';


//     _id,
//     description, 
//     litterParents,
//     publishedAt,
//     published,
//     location[]->{
//       locationName
//     },
//     soldOut,
//     published,
//     litterName,
//     puppies[]->{
//       description,
//       currentlyAvailable,
//       published,
//       pomskyName,
//       weight,
//       female,
//       image{
//         asset->
//       },
//       backgroundImage{
//         asset->
//       },
//       eyeColor-> {
//       color
//       },
//       isPuppy,
//       showPrice,
//       price
//     }
const PomskyContext  = React.createContext({
    data : {} as IData
});

export default PomskyContext;