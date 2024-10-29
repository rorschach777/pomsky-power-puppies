"use client";

import PuppyCard from './PuppyCard';
import {useReducer, useEffect} from "react";
import {RadioGroup, Radio, input} from "@nextui-org/react";
import {removeDuplicates} from '../utils/arrayMethods'
import LitterTitle from "./LitterTitle";

const initialState = {
    allResults: [],
    filteredResults: [],
    filters: {
        useFilter : false,
        description: {
            value: ''
        },
        location : {     
            value : '',
            use : false
        },
        status : {
            value : '',
            use: false
        }
    }
}
const litterReducer = (state, action) => {
    if (action.type === "DEFAULT_SETUP"){
        return {
            ...state,
            allResults : action.payload.defaultPuppies,
            filteredResults : action.payload.filteredResults,
            filters : {
                ...state.filters,
                location : {
                    ...state.filters.location,
                    value : action.payload.location
                },
                status: {
                    ...state.filters.status,
                    value : action.payload.status
                }
            
            }
        }
    }
    if (action.type === "UPDATE_FILTERS"){
        return {
            ...state,
            filteredResults : action.payload.filteredResults 
        }
    }
    if (action.type === "UPDATE_LOCATION"){
        return {
            ...state,
            filteredResults : action.payload.filteredResults,
            filters: {
                ...state.filters,
                location: {
                    ...state.filters.location,
                    value: action.payload.location
                }
            }
         
        }
    }
    if (action.type === "UPDATE_STATUS"){
        return {
            ...state,
            filteredResults : action.payload.filteredResults,
            filters: {
                ...state.filters,
                status: {
                    ...state.filters.status,
                    value: action.payload.status
                }
            }
         
        }
    }
    if (action.type === "REMOVE_FILTER"){
        return {
            ...state,
            filteredResults : action.payload.value,
        }
    }
 
}


const Litter = (props ) => {
    const locations = removeDuplicates(props.data.litters.map((l,i)=>l.location[0].locationName));
    const [litterState, litterDispatch] = useReducer(litterReducer, initialState);


    useEffect(()=>{
        const sortedLitters = props.data.litters.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        const defaultPuppies = sortedLitters.map(l=>{return l});
        const activeLitterLocation = "Edmeston, NY";
        const filteredResults = defaultPuppies.filter(l=> { return l.location[0].locationName === activeLitterLocation}) 
        litterDispatch({type: "DEFAULT_SETUP", payload : { defaultPuppies : defaultPuppies, filteredResults : filteredResults, location: 'Edmeston, NY', status : 'Available'}});
    },[])

    useEffect(()=>{
        createPuppies();
    }, [litterState.filteredResults])

    useEffect(()=>{

    }, [litterState])





    const filterLitters = ( params ) => {

        let output = [];
        // If it's location get the current status value... 
        if(params.type === "location") {
            output = [ ...litterState.allResults.filter(l=> l.location[0].locationName === params.inputValue)];
  
        } 
        // If its status get the current location and add it in 
        if (params.type === "status") {
            let available = params.inputValue === "Available" ? true : false;
            let resetFilters = params.inputValue === "All" ? true : false;
         
            // Filter for location first... 
            let littersByLocation = litterState.allResults.filter(l => l.location[0].locationName === litterState.filters.location.value);
            // Loop over the litters... Modify the litter so they only include the puppy's that are either available or not available... 
            if(resetFilters === false){
                littersByLocation.forEach(l=>{
                    let updatedLitter = {
                        ...l,
                        puppies: l.puppies.filter(p=>p.currentlyAvailable === available)
                    };
                    output.push(updatedLitter);
                })
            } else {
                output = [...littersByLocation]
            }
        }
        return output;
    }


    const updateFilterOptions = ({type, inputValue}) => {
        let updatedFilterOptions =  filterLitters({type : type, inputValue : inputValue})
        if (type === "location") {
           litterDispatch({type: "UPDATE_LOCATION", payload: { filteredResults : updatedFilterOptions, location : inputValue}});
        }
        if (type === "status") {
            litterDispatch({type: "UPDATE_STATUS", payload: { filteredResults : updatedFilterOptions, status : inputValue }});
        }
    }


 
    const locationHandler = (inputValue) => {
        updateFilterOptions({type: "location", inputValue : inputValue})
    }
    
    const statusHandler = (inputValue) => {
        updateFilterOptions({type: "status", inputValue : inputValue})
    }

    const createPuppies = () => {
        if(litterState.filteredResults.length > 0){
            return litterState.filteredResults.map((litter, i)=> {
     
                if(litter.published && litter.litterName != "Adult Pomskys"){
                    return(
                        <div  key={`${litter.litterName}-${i}`} className=" ppp-puppies ">
                            <LitterTitle litter={litter}  />
                            <div className="ppp-flex-container">
                                { litter.puppies.map((puppy, index)=>{
                                    if(puppy.isPuppy && puppy.published ){
                               
                                        return (
                                            <PuppyCard 
                                            key={`puppy-${index}`}
                                            description={puppy.description}
                                            name={puppy.pomskyName} 
                                            weight={puppy.weight} 
                                            price={puppy.price}
                                            eyeColor={puppy.eyeColor != null ? puppy.eyeColor.color : "TBD "}
                                            showPrice={puppy.showPrice}
                                            location={litter.location[0].locationName} 
                                            available={puppy.currentlyAvailable}
                                            image={puppy.image}
                                            backgroundImage={puppy.backgroundImage}
                                            female={puppy.female}
                                            
                                            />
                                        );
                                    }
                                
                                })}
                                {/* {
                                     <div className="ppp-no-puppies-message"></div>
                                } */}
                            </div>
                        </div>
                    )
                }
          
            })
        } 
    }

    const generateFilterList = () => {
        return (
            <>
                <RadioGroup
                    label="Show by Location"
                    color="secondary"
                    value={litterState.filters.location.value}
                    onValueChange={locationHandler}
                    >
                        {locations.map((l,i)=>{
                            return(
                                <Radio key={`location-name-${i + 1}`} value={l}>{l}</Radio>
                            );
                        })} 
                </RadioGroup>
                <RadioGroup
                    label="Show by Availability"
                    color="secondary"
                    value={litterState.filters.status.value}
                    onValueChange={statusHandler}
                    >
                        <Radio value="All">All</Radio>
                        <Radio value="Available">Available</Radio>
                        <Radio value="Sold">Sold</Radio>
                </RadioGroup>
            </>
        );
    }

 

    return(
        <>
        <div className="litter">
            {/* <div className="ppp-container">
                
            </div> */}
            <div className="ppp-flex-container">
        
                    <div className="ppp-litter-info">
                        <div className="ppp-litter-title">
                            <h2>Most Recent Litters</h2>
                        </div>
                        <div className="ppp-filter-options">
                            { generateFilterList() }
                        </div>
                        <div className="ppp-flex-container ">
                            { createPuppies() }
                        </div>
                   
                    </div>
                </div>
        </div>
        </>
       
    );
}

export default Litter;