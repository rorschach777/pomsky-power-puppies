"use client";

import React, { useEffect, useState } from 'react';
import PomskyContext from './pomsky-context';
import { client } from "@/sanity/client";
import { IData, IPuppy } from "../interfaces/interfaces";

const STORAGE_KEY = 'pomsky-data';
const EXPIRATION_MS = 1000 * 60 * 5; // 5 minutes

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
    const restoreFromCache = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const { data, timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > EXPIRATION_MS) return;

        setLitters(data.litters);
        setAvailablePuppies(data.availablePuppies);
      } catch (e) {
        console.warn("Failed to parse cache:", e);
      }
    };

    const fetchData = async () => {
      try {
        const result = await client.fetch(PAGE_DATA_QUERY, {}, { next: { revalidate: 30 } });
        const home = result.find((p: any) => p.title === "Home");
        const litters = home?.litters || [];
        const puppies = litters.flatMap((l: any) => l.puppies || []);
        const available = puppies.filter((p: IPuppy) => p.currentlyAvailable);

        setLitters(litters);
        setAvailablePuppies(available);

        // cache the fresh result
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          data: { litters, availablePuppies: available },
          timestamp: Date.now()
        }));
      } catch (err) {
        console.error("Fetch failed in PomskyProvider:", err);
      }
    };

    restoreFromCache();
    fetchData();
  }, []);

  return (
    <PomskyContext.Provider value={{ litters, availablePuppies }}>
      {children}
    </PomskyContext.Provider>
  );
};

export default PomskyProvider;