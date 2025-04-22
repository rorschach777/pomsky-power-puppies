
 interface IEyeColor {
    color: string
}



 interface IAsset {
    asset: {
        url : string
    }
}

interface IPuppy {
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

interface ILitter {
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

