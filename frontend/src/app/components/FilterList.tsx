"use client";

import {useState, PropsWithChildren} from 'react';
import './FilterList.css';


type Props = {
    options : string[],
    change: (value : string)=>{}  
}
const FilterList =  (props : PropsWithChildren<Props> ) => {
    return (
        <div className="filter-list">
            <form>
                <select onChange={(e)=>props.change(e.target.value)} >
                    {props.options.map((c, i)=>{
                        return <option selected={i === 0 ? true : false}>{c}</option>
                    })}
                </select>
            </form>
       </div>
    );
}
export default FilterList;