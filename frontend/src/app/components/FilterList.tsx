"use client";

import {PropsWithChildren} from 'react';
import './FilterList.css';


type Props = {
    options : string[],
    change: (value : string)=>{},
    label: string
}
const FilterList =  (props : PropsWithChildren<Props> ) => {
    return (
        <div className="filter-list">
            <form>
                <div className="form-group">
                    <label>{props.label}</label>
                    <select onChange={(e)=>props.change(e.target.value)} >
                        {props.options.map((c, i)=>{
                            return <option key={`${props.label}-option-${i}`} selected={i === 0 ? true : false}>{c}</option>
                        })}
                    </select>
                </div>
            
            </form>
       </div>
    );
}
export default FilterList;