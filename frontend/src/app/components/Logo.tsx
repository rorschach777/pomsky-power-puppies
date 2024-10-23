import { PropsWithChildren } from 'react';
import './Logo.css';

interface IProps {
    color: string
}

const Logo = ( props : PropsWithChildren<IProps>) => {
    return (
        <div className="logo">
            <img 
                alt="Pomsky Puppies | Philadelphia, Pennsylvaina | Edmeston, New York" 
                src={`/images/ppp-logo-${props.color}.png`} />
        </div>
    );
}
export default Logo;