"use client";

import React, { useEffect, useState } from 'react';
import PomskyContext from './pomsky-context';
import { client } from "@/sanity/client";
import { IData, IPuppy, IPage } from "../interfaces/interfaces";

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
    location[]->{ locationName },
    soldOut,
    litterName,
    puppies[]->{
      description,
      currentlyAvailable,
      published,
      pomskyName,
      weight,
      female,
      image{ asset-> },
      backgroundImage{ asset-> },
      eyeColor->{ color },
      isPuppy,
      showPrice,
      price
    }
  }
}`;

const PomskyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [litters, setLitters] = useState<IData['litters']>([]);
  const [availablePuppies, setAvailablePuppies] = useState<IPuppy[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(PAGE_DATA_QUERY, {}, { next: { revalidate: 30 } });
        const home = result.find((p: IPage) => p.title === "Home");
        const litters = home?.litters || [];
        const puppies = litters.flatMap((l: any) => l.puppies || []);
        const available = puppies.filter((p: IPuppy) => p.currentlyAvailable);

        setLitters(litters);
        setAvailablePuppies(available);
      } catch (err) {
        console.error("Error fetching data for PomskyProvider:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <PomskyContext.Provider value={{ litters, availablePuppies }}>
      {children}
    </PomskyContext.Provider>
  );
};

export default PomskyProvider;