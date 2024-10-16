"use client";
import {PropsWithChildren, useState} from 'react';
import './Gallery.css';
interface IProps {
    images: string[]
}
const Gallery =  (props : PropsWithChildren<IProps>) => {
    const [imgIndex, setImgIndex] = useState(0);

 
   return (
        <div className="gallery">
             {props.images.map((c, i)=>{
                if(i === imgIndex){
                    return (
                        <div className="gallery-image" style={{backgroundImage: `url('/images/gallery/${c}.jpg')`}}>

                        </div>
                     
                    );
                } else {
                    return (
                        <div className="gallery-image hidden" style={{backgroundImage: `url('/images/gallery/${c}.jpg')`}}>

                        </div>
                    ); 
                }
             })}
             <div className="thumbnails-container">
                {props.images.map((c,i)=>{
                    return (
                        <div className="thumbnail">
                              <img onClick={()=>setImgIndex(i)} src={`./images/gallery/${c}.jpg`}/>
                        </div>
                    )
                })}
             </div>
       
        </div>
    );
}
export default Gallery;