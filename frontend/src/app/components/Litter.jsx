"use client";

import PuppyCard from './PuppyCard';
import FilterList from "./FilterList";
import {useReducer} from "react";
import './Litter.css'
import { filter } from 'framer-motion/client';


const initialState = {
    filters: {
        filteredPuppies : [],
        useFilter : false,
        location : {     
            name : '',
            use : false
        },
        status : {
            available : '',
            use: false
        }
    }
}
const litterReducer = (state, action) => {
    if (action.type === "REMOVE_FILTER"){
        return {
            ...state,
            filters: {
                useFilter: false, 
                filteredPuppies: []
            }
        }
    }
    if (action.type === "UPDATE_LOCATION"){
        return {
            ...state,
            filters: {
                ...state.filters,
                useFilter: true,
                filteredPuppies: action.payload.filteredPuppies,
                location : {
                    name : action.payload.value,
                    use: true
                }
            }
        }
    }
    if(action.type === "UPDATE_STATUS"){
        return {
            ...state,
            filters: {
                ...state.filters,
                useFilter: true,
                filteredPuppies: action.payload.filteredPuppies,
                status : {
                    available : action.payload.status,
                    use: true
                }
            }
        }
    }
}


const Litter = (props ) => {
    const [litterState, litterDispatch] = useReducer(litterReducer, initialState);
  

    const filterStatus = (inputValue) => {
        const allPuppies = [];
        props.data.forEach((c)=>{
            c.puppies.forEach(p=>{
                allPuppies.push(p);
            })
        });
        return allPuppies.filter(puppy => puppy.currently_available === (inputValue.toLowerCase() === "available" ? true : false));
     
    }

    const statusHandler = (inputValue) => {
        const filteredByStatus = filterStatus(inputValue);
        if (inputValue.toLowerCase() === "all"){
   
            litterDispatch({type: "REMOVE_FILTER"})
        } else {
            litterDispatch({type: "UPDATE_STATUS", payload: { filteredPuppies: filteredByStatus, status:  inputValue}})
        }
    }



    const filterLocation = (inputValue) => {
        const litters = props.data;
        const filteredPuppies = [];
         litters.forEach( litter =>{ 
            litter.location[0].location_name.toLowerCase() === inputValue.toLowerCase() ? litter.puppies.forEach(puppy => filteredPuppies.push(puppy)) : null;
        });
        return filteredPuppies;
    }

    const locationHandler = (inputValue) => {
        const filteredByLocation = filterLocation(inputValue);
        if(filteredByLocation.length > 0){
            litterDispatch({type: "UPDATE_LOCATION", payload: { value : inputValue, filteredPuppies : filteredByLocation }});
        }
    }
    

    return(
        <>
        <div className="ppp-container filters">
            <div></div>
            <div className="filters-list" >
                <span>Filters:</span>
                <FilterList change={locationHandler} options={ [ "Spring City, PA", "New York, NY", "Pottstown, PA"]} />
                <FilterList change={statusHandler} options={ ["All", "Sold", "Available"] } />
            </div>
        </div>
        <div className="litter">
            { 
                <>
                    {
                        litterState.filters.useFilter === false && (
                            props.data.map((curLitter)=>{
                             return(
                             curLitter.puppies.map((curPuppy)=>{
                                 return(
                                 <PuppyCard 
                                     name={curPuppy.pomsky_name}
                                     price={curPuppy.price} 
                                     weight={curPuppy.weight} 
                                     description={curPuppy.description}
                                     available={curPuppy.currently_available}
                                     location={curLitter.location[0].location_name}
                                     />
                             )}))
                         })
                     )
                    }
                </>
            }
            { litterState.filters.useFilter === true  && (
                <>
                    {
                        litterState.filters.filteredPuppies.map((curPuppy)=> {
                        return(
                            <PuppyCard 
                                name={curPuppy.pomsky_name}
                                price={curPuppy.price} 
                                weight={curPuppy.weight} 
                                description={curPuppy.description}
                                available={curPuppy.currently_available}
                                />
                        );
                    })
                    }
                </>
          
            )}
        </div>
        </>
       
    );
}

export default Litter;