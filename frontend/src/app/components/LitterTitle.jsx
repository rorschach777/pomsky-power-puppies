"use-client"
import {useState} from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";


const litterContent = (litterDescription) => {
    return (

        litterDescription.map((d,i)=>{ return <p key={`description-${i}`}>{d.children[0].text}</p> })

    )
}

const LitterTitle = (props) => {
    const [showText, setShowText] = useState(false);

    const clickHandler =  () => {
        setShowText(!showText);
    }
    return (
        <div className="litter-title">
            <div className="litter-parents">{props.litter.litterParents}</div>
            <div>
               
                { props.litter.description.length > 0 && (
                
                <div className="ppp-description-toggle">
                    <Accordion defaultExpandedKeys={["1"]}>
                        <AccordionItem key="1"
                        aria-label={props.litter.location[0].locationName} 
                        title={`${props.litter.location[0].locationName} - ${props.litter.litterName}` } >
                            {  litterContent(props.litter.description) }
                        </AccordionItem>
                    </Accordion>
                </div>
           
                )}
            </div>
        </div>
    );
}

export default LitterTitle;