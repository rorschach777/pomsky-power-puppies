"use client";

import PuppyCard from './PuppyCard';
import FilterList from "./FilterList";
import {useReducer, useEffect} from "react";
import './Litter.css'
import {removeDuplicates} from '../utils/arrayMethods'

const initialState = {
    allResults: [],
    filteredResults: [],
    filters: {

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
    if (action.type === "DEFAULT_SETUP"){
        return {
            ...state,
            allResults : action.payload.value,
            filteredResults : action.payload.value,
            filters : {
                ...state.filters
            
            }
        }
    }
    if (action.type === "UPDATE_FILTERS"){
        return {
            ...state,
            filteredResults : action.payload.filteredResults 
        }
    }
    if (action.type === "DEFAULT_SETUP"){
        return {
            ...state,
            allResults : action.payload.value,
            filteredResults : action.payload.value,
            filters : {
                ...state.filters
            
            }
        }
    }
    if (action.type === "REMOVE_FILTER"){
        return {
            ...state,
            filteredResults : action.payload.value,
            filters: {
                ...state.filters,
                useFilter: false, 
            }
        }
    }
 
}


const Litter = (props ) => {
    const [litterState, litterDispatch] = useReducer(litterReducer, initialState);
    useEffect(()=>{
        const sortedLitters = props.data.litters.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        const defaultPuppies = sortedLitters.map(l=>{return l});
        litterDispatch({type: "DEFAULT_SETUP", payload : { value : defaultPuppies}});
    },[])

    useEffect(()=>{
        createPuppies() 
    }, [litterState.filteredResults])


    const updateFilterOptions = ({type, inputValue}) => {
        let updatedFilterOptions = [...litterState.allResults];
        let inputValueReset = false;
        if(type === "location"){
            updatedFilterOptions = [ ...updatedFilterOptions.filter(l=> l.location[0].locationName === inputValue)];
        }
        if(type==="status"){
            const inputValueBool = inputValue === "Available" ? true : false;
            inputValueReset = inputValue === "All" ? true : false;
            if(inputValueReset === false) {
                const filteredResults =  updatedFilterOptions.map(l=> {
                    let updatedLitter = {
                        ...l,
                        puppies : []
                    }
                    updatedLitter.puppies = l.puppies.filter(p=> p.currentlyAvailable  === inputValueBool);
             
                    return updatedLitter;
                })
                updatedFilterOptions = [ ...filteredResults];   
            }  
            
        }
        litterDispatch({type: "UPDATE_FILTERS", payload: { filteredResults : updatedFilterOptions }});
    }

    const locationHandler = (inputValue) => {
        updateFilterOptions({type: "location", inputValue : inputValue})
    }
    
    const statusHandler = (inputValue) => {
        updateFilterOptions({type: "status", inputValue : inputValue})
    }


    const createPuppies = () => {
        let puppiesToDisplay = false;
        if(litterState.filteredResults.length > 0){
            return litterState.filteredResults.map((litter, i)=> {
     
                if(litter.published){
                    return(
                        <div className="ppp-container" key={`${litter.litterName}-${i}`}>
                            {litter.litterParents !== null && ( 
                                <div className="litter-title">
                                    <div className="litter-parents">{litter.litterParents}</div>
                                    <div>
                                        {litter.description.length > 0 && (
                                            litter.description.map(((d,i)=>{
                                                return <p key={`description-${i}`}>{d.children[0].text}</p>;
                                            }))
                                        )}
                                    </div>
                                </div>
                            )}
    
                            <div className="ppp-flex-container ">
                                { litter.puppies.map((puppy, index)=>{
                                    if(puppy.isPuppy && puppy.published ){
                                        puppiesToDisplay = true;
                                        return (
                                            <PuppyCard 
                                            key={`puppy-${index}`}
                                            description={puppy.description}
                                            name={puppy.pomskyName} 
                                            weight={puppy.weight} 
                                            price={puppy.price}
                                            eyeColor={puppy.eyeColor}
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
                                { puppiesToDisplay === false && (
                                    <div className="ppp-no-puppies-message"></div>
                                )}
                            </div>
                        </div>
                    )
                }
          
            })
        } 
    }
    return(
        <>
        <div className="ppp-container filters">
            <div className="ppp-litter-title">
                <h2>Most Recent Litters</h2>
            </div>
            <div className="filters-list" >
                <span>Filters:</span>
                <div className="filters-list-selects">
                    <FilterList change={locationHandler} options={ removeDuplicates(props.data.litters.map(l=>l.location[0].locationName))} label="Location:" />
                    <FilterList change={statusHandler} options={ ["All", "Sold", "Available"] } label="Availability:"  />
                </div>
               
            </div>
        </div>
        <div className="litter">
            { createPuppies() }
        </div>
        </>
       
    );
}

export default Litter;