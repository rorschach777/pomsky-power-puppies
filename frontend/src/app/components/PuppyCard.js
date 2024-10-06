import './PuppyCard.css';
import Image from 'next/image';


const PuppyCard = (props) => {
    return(
        <div className="puppy-card" >
            <div className="puppy-card-heading">
                <Image src="/images/dog-image.jpg" width="300" height="150"/>
            </div>
            <div className="puppy-card-content">
                <div className="puppy-card-content-name">{props.name}</div>
                <div>{props.description}</div>
                <div>Price: {props.price}</div>
                <div>Status: {props.available ? 'Available' : 'Sold'}</div>
                <div>Location: {props.location}</div>
            </div>
        </div>
    );
}
export default PuppyCard;