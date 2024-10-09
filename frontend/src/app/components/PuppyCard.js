import './PuppyCard.css';
import Image from 'next/image';
import {Badge, Avatar} from "@nextui-org/react";

const PuppyCard = (props) => {
    return(
        <div className="puppy-card" >
            <div className="puppy-card-heading">
                <Image src="/images/dog-image.jpg" width="300" height="150"/>
            </div>
            <div className="puppy-card-content">
                <div className="puppy-card-content-name">{props.name}</div>
                <div className="puppy-card-description">{props.description}</div>
                <div className="puppy-card-bottom-content">
                    <div className="puppy-card-bottom-status">Status: 
                        <Badge content="" color={props.available ? "success" : "danger"} shape="circle" placement="bottom-right"></Badge>
                        {props.available ? 'Available' : 'Sold'}</div>
                    <div>Price: 
               
                         ${props.price}</div>
                    <div>Location: {props.location}</div>
                </div>
      
            </div>
        </div>
    );
}
export default PuppyCard;