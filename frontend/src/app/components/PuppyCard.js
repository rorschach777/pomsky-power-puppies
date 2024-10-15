import './PuppyCard.css';
import Image from 'next/image';
import {Badge, Avatar} from "@nextui-org/react";

const PuppyCard = (props) => {
    return(
        <div className="puppy-card" style={{background: "linear-gradient(180deg, rgba(0, 144, 231, .75) 0%, rgba(0, 144, 231,0) 100%), url(" + `${props.backgroundImage !== null ? props.backgroundImage.asset.url : '/images/dog-image.jpg' }` + ")" }}>
            <div className="puppy-card-heading">
                <Image src={props.image !== null ? props.image.asset.url : '/images/dog-image.jpg'} width="300" height="150"/>
            </div>
            <div className="puppy-card-content">
                <div className="puppy-card-content-name">{props.name}</div>
                <div className="puppy-card-description">{props.description}</div>
                <div className="puppy-card-bottom-content">
                    <div className="puppy-card-bottom-status">Status: 
                        <Badge content="" color={props.available ? "success" : "danger"} shape="circle" placement="bottom-right"></Badge>
                        {props.available ? 'Available' : 'Sold'}</div>
                    <div>Price: 
                         ${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    <div>Location: {props.location}</div>
                    <div>{props.female ? 'Female' : 'Male'}</div>
                </div>
            </div>
        </div>
    );
}
export default PuppyCard;