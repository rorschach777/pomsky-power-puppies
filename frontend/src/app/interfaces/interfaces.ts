import  { ReactNode } from 'react';
 interface IEyeColor {
    color: string
}



 interface IAsset {
    asset: {
        url : string
    }
}

export interface IPuppy {
    descriptions: string,
    currentlyAvailable: boolean, 
    published: boolean, 
    pomskyName: string, 
    weight: number,
    female: boolean, 
    image: IAsset, 
    backgroundImage: IAsset,
    eyeColor: IEyeColor,
    isPuppy: boolean,
    showPrice: boolean, 
    price: number,

}

export interface ILitter {
    _id : string,
    description: string,
    litterParents: string,
    publishedAt: string,
    location: [],
    soldOut: boolean,
    published: boolean,
    litterName: string,
    puppies: IPuppy[]
}

export interface IData {
    litters: ILitter[]
}


export interface IAvailablePuppies {
    puppies : IPuppy[]
}

export interface IProps {
    value: {
        litters: ILitter[],
        availablePuppies: IPuppy[]
    },
    children: ReactNode;
    // other props
}
  

export interface IPomskyContext {
    availablePuppies : IPuppy[]
}

export interface IInitialState  {
    litters : ILitter[],
    availablePuppies: IPuppy[],
    pages: IPage[]
}

export interface IPage {
    title : string,
    isHomepage: boolean,
    metaDescription: string,
    metaTitle: string
}

