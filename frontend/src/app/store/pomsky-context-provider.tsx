"use client";

import React, { useEffect, useState } from 'react';
import PomskyContext from './pomsky-context';
import { client } from "@/sanity/client";
import { IData, IPuppy, IPage, ILitter} from "../interfaces/interfaces";

const STORAGE_KEY = 'pomsky-data';
const EXPIRATION_MS = 1000 * 60 * 5; // 5 minutes

const PAGE_DATA_QUERY = `{
  "pages": *[_type == "page"]{
    title,
    slug,
    isHomepage,
    metaTitle,
    metaDescription
  },
  "locations": *[_type == "location" && published == true]{ _id, locationName },
  "litters": *[_type == "litter" && published == true]{
    _id,
    description, 
    litterParents,
    publishedAt,
    soldOut,
    litterName,
    location[]->{ locationName },
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
  const [litters, setLitters] = useState<ILitter[]>([]);
  const [availablePuppies, setAvailablePuppies] = useState<IPuppy[]>([]);
  const [pages, setPages] = useState<IPage[]>([]);

  useEffect(() => {
    const restoreFromCache = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        const { data, timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > EXPIRATION_MS) return;

        setLitters(data.litters);
        setAvailablePuppies(data.availablePuppies);
        setPages(data.pages)
      } catch (e) {
        console.warn("Failed to parse cache:", e);
      }
    };

      const fetchData = async () => {
      try {
        const result = await client.fetch(PAGE_DATA_QUERY, {}, { next: { revalidate: 30 } });

        const { pages, litters } = result;

        const availablePuppies = litters
          ?.flatMap((l: any) => l.puppies || [])
          .filter((p: IPuppy) => p.currentlyAvailable);

        setLitters(litters || []);
        setAvailablePuppies(availablePuppies || []);
        setPages(pages || []);

        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          data: {
            litters,
            availablePuppies,
            pages
          },
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
    <PomskyContext.Provider value={{ litters, availablePuppies, pages }}>
      {children}
    </PomskyContext.Provider>
  );
};

export default PomskyProvider;