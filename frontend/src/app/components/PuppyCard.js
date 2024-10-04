import './PuppyCard.css';
const PuppyCard = (props) => {
    return(
        <div className="puppy-card">
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>{props.available ? 'Available' : 'SOLD'}</div>
        </div>
    );
}
export default PuppyCard;